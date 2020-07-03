document.addEventListener('keydown', checkKey);

function checkKey(e){
    e.key === "Enter" ? calcularInputs() :  false
}

calcular = document.getElementById("calcular");
calcular.addEventListener("click", calcularInputs, false);
    
function calcularInputs(){

    triangleData = [];
    potencia = 0;

    for(i=0;i<3;i++){
        triangleData.push(document.getElementById(`side${i}`).value)
        
        Number(triangleData[i]) 
       
        if(triangleData[i]<=0 || triangleData[i] === ''){
            console.log(i)
            inputInvalid(i)
        } 
    }
    

    function inputValid(){
        potencia += (triangleData[i]) 
        potencia = potencia / 2;
        [side0, side1, side2] = triangleData
        triangleArea = Math.sqrt(potencia*((potencia-side0)*(potencia-side1)*(potencia-side2)));

        showResult = document.getElementById("result");
        showResult.className = `formatar-resultado`
        showResult.textContent = triangleArea;
    }
       
   
    

   // window.location.assign(window.location.pathname + triangleArea)
}

function inputInvalid(idInput){
    inputIsInvalid = document.getElementById(`side${idInput}`)
    inputIsInvalid.className += ' is-invalid '
}


    