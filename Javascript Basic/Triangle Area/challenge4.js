const fields = document.querySelectorAll("[required]");

for ( field of fields ){
    field.addEventListener("invalid", customValidation);
    //"invalid" é tido como um evento que é disparado 
    //quando o input possui o atributo required e no entanto é omitido
    
    //The invalid event fires when a submittable element has been 
    //checked for validity and doesn't satisfy its constraints.
}

function customValidation(event){
    const field = event.target// com isso temos uma referência ao objeto que enviou o evento
    field.setCustomValidity("uba uba") 
    //lógica para verificar se existem erros
    
//essa funcao eu nao entendi
    function verifyErrors(){
        let foundError = false;

        for ( let error in field.validity){
            
            if ( error != "customError" && field.validity[error]){
                foundError = error;//so vai retornar um outro true referente ao atributo valueMissing
            }

            return foundError;
        }
    }

    const error = verifyErrors()
    console.log("Erro existe: " + error)

    if (error){
        field.setCustomValidity("Este campo eh obrigatorio!")
    } else {
        field.setCustomValidity("")
    }

    
}

document.querySelector("form").addEventListener("submit", event =>{
    console.log("enviado");
    event.preventDefault()//cancels the event if it is cancelable, 
    //meaning that the default action that belongs to the event will not occur.
    //Clicking on a "Submit" button, prevent it from submitting a form
})