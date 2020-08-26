firstNumber = document.getElementById("first-number");
secondNumber = document.getElementById("second-number");


const BUTTONS = document.querySelectorAll("button");
    for(button of BUTTONS){
        button.addEventListener("click", mainEvent)
    }

var inputs = document.querySelectorAll("[required]");
    for (input of inputs){ 
        input.addEventListener("blur", (e) => {
            field = event;
            console.log(inputs)
            if(!field.target.validity.valueMissing){
                field.srcElement.className += (" acstive")
            } else {
                field.srcElement.className = ("form-control")
            }
        })
    }

function mainEvent(event){
    event.preventDefault();
    
    if(firstNumber.value && secondNumber.value !== ""){
        event.path[0].outerText === "Multiply" ? multiply(firstNumber.value, secondNumber.value) : divide(firstNumber.value, secondNumber.value)
    } else {
        Swal.fire({
            icon: `question`,
            title: `Input invalid`,
            text: `Well, there's nothing here...`,
            confirmButtonText: 'Ok'
        })

        firstNumber.value = ``;
        secondNumber.value = ``;
        firstNumber.className = "form-control";
        secondNumber.className = "form-control";
    }
}

function multiply(number1, number2){
    console.log(number1 * number2)
    Swal.fire({
        title: `Multiply`,
        text: number1 * number2,
        confirmButtonText: 'Cool'
    })

    firstNumber.value = ``;
    secondNumber.value = ``;
    firstNumber.className = "form-control";
    secondNumber.className = "form-control";
}

function divide(number1, number2){
    console.log(number1 / number2)
    Swal.fire({
        title: `Divide`,
        text: number1 / number2,
        confirmButtonText: 'Cool'
    })

    firstNumber.value = ``;
    secondNumber.value = ``;
    firstNumber.className = "form-control";
    secondNumber.className = "form-control";
}
