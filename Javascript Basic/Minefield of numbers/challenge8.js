inputArea = document.getElementById("number-inputer");

document.addEventListener('click', () => {
    shooter = (event.target);
    setInput(shooter.textContent);
}
);

document.addEventListener("keydown", () => {
    tecla = event.key;
    tecla === `Enter` ? checkInput() : false
    tecla = parseInt(tecla);
    setInput(tecla);
})

function setInput(element){
    console.log(element);
    element = parseInt(element);
    
    element === NaN ? false : inputArea.value = element;
}

function checkInput(){
    if (inputArea.value == ''){
        alert('insira um número');
    } 
    else {
        randomNumber = Math.floor(Math.random() * 10);

        if(randomNumber == inputArea.value){
            alert("Parabéns! Você acaba de ganhar uma chance de ganhar mil reais!!");
            inputArea.value = ``;
        } else{
            alert('aaah não foi dessa vez..');
            inputArea.value = ``;
        }
    }
}