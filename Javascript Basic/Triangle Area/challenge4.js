const fields = document.querySelectorAll("[required]");

// butaum = document.getElementById("result");
// butaum.disabled = true - butaum disabled até que os inputs sejam validos... que tal?
// input1 = document.getElementById("side1");
// input1.focus()

for ( field of fields ){
    field.addEventListener("invalid", customValidation);
    //"invalid" é tido como um evento que é disparado 
    //quando o input possui o atributo required e no entanto é omitido
    
    //The invalid event fires when a submittable element has been 
    //checked for validity and doesn't satisfy its constraints.
    field.addEventListener("blur", customValidation);
}

function customValidation(event){
    

    //impede o bubble de ser disparado 
    event.preventDefault()

    const field = event.target// com isso temos uma referência ao objeto que enviou o evento
    //field.setCustomValidity("uba uba") bubble bloqueado 
    //console.log(field.type)
    //lógica para verificar se existem erros
//essa funcao eu nao entendi
    function verifyErrors(){
        let foundError = false;

        for ( let error in field.validity){
            
            if (field.validity[error] && !field.validity.valid){
                foundError = error;//so vai retornar um outro true referente ao atributo valueMissing
            }

            return foundError;
        }

        //console.log(foundError)
    }

    const error = verifyErrors()

    const smallError = field.parentNode.querySelector("small.error")

    if (error){
        
        smallError.innerHTML = 'Campo Obrigatório'
    } else {
        smallError.classList.remove("active");
        smallError.innerHTML = "";
    }

    //console.log("Erro existe: " + error)

    //altera mensagem do buble, que não está sendo masi disparado graças ao preventDefault no início da função
    // if (error){
    //     field.setCustomValidity("Este campo eh obrigatorio!")
    // } else {
    //     field.setCustomValidity("")
    // }

    
}



document.querySelector("form").addEventListener("submit", event =>{
    operation();
    //cancels the event if it is cancelable, 
    //meaning that the default action that belongs to the event will not occur.
    //Clicking on a "Submit" button, prevent it from submitting a form
})

function operation(){
    event.preventDefault()
    inputs = [];
    for( i=1 ; i<4 ; i++ ){
        inputs[i] = document.getElementById(`side${i}`).value;
    }

    [branco, side1, side2, side3] = inputs;
    console.log(side1)
    console.log(side2)
    console.log(side3)

    var s = (side1 + side2 + side3)/2;
    var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    area = area.toString();
    dotIndex = area.indexOf('.') + 3;
    area = area.slice(0, dotIndex)
    console.log(typeof area)
    result = document.getElementById("result");
    result.textContent = area;
    result.className = 'formatar-resultado'
    

}