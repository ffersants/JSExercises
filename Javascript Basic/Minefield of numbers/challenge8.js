inputArea = document.getElementById("number-inputer");

document.addEventListener('click', () => {
    shooter = (event.target);
    setInput(shooter)
}
);


function setInput(element){
    element = (shooter.textContent);
    element = parseInt(element);
    
    element === NaN ? false : inputArea.value = element;
}

function checkInput(){
    if (inputArea.value == ''){
        alert('insira um número')
    } 
    else {
        randomNumber = Math.floor(Math.random() * 10);

        if(randomNumber == inputArea.value){
            alert("Parabéns! Você acaba de ganhar uma chance de ganhar mil reais!!")
        } else{
            alert('aaah não foi dessa vez..')
        }
    }//if ends
}