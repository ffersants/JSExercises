inputArea = document.getElementById("number-inputer");
numbers = document.getElementById("numbers")
document.addEventListener("keydown", () => {
    event.key === "Enter" ? checkInput() : setInput(event.key);
})
/*para capturar todos os clicks no buttons com num, está sendo aplicada a tática de bubbling
descrita na página --> https://javascript.info/bubbling-and-capturing
*/
numbers.addEventListener('click', (e) => {
    shooter = (event.target);
    shooter.tagName === 'BUTTON' ? setInput(shooter.textContent) : console.warn("It's not a number!");
}
);

document.addEventListener("keydown", () => {
    tecla = event.key;
    tecla === `Enter` ? checkInput() : false
    tecla = parseInt(tecla);
    setInput(tecla);
})

function setInput(element){
    element = parseInt(element);    
    inputArea.value = element;
}

function checkInput(){
    if (inputArea.value == ''){
        Swal.fire({
            title: "Ops! It's empty",
            text: "Insert a number to continue",
            icon: "warning",
            confirmButtonText: "Ok"
        })
    } 
    else {
        randomNumber = Math.floor(Math.random() * 10);

        if(randomNumber == inputArea.value){
            Swal.fire({
                title: 'Good work!',
                text: "Ihuu, it matched!",
                icon: 'success',
                confirmButtonText: 'Great!'
              })
            inputArea.value = '';
        } else{
            Swal.fire({
                title: 'Not matched!',
                text: "Unfortunately it wasn't your turn",
                icon: 'error',
                confirmButtonText: 'Try again'
            })
            inputArea.value = '';
        }
    }//if ends
}

