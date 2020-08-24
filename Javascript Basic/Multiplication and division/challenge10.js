const BUTTONS = document.querySelectorAll("button");
for(button of BUTTONS){
    button.addEventListener("click", mainEvent)
}

firstNumber = document.getElementById("first-number");
secondNumber = document.getElementById("second-number");

firstNumber.addEventListener("blur", () => {
    console.log(typeof firstNumber.value)
    if(firstNumber.value = `1`) {
        firstNumber.validity.valid
        console.log("fojr")
    }
})

function mainEvent(event){
    event.preventDefault();
    if(firstNumber.value && secondNumber.value !== ""){
        
        event.path[0].outerText === "Multiply" ? multiply() : divide()
    } 
   
}

//multiply = document.getElementById("multiply");