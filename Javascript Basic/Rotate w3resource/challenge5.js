/*
    Write a JavaScript program to rotate the string 'w3resource' in 
    right direction by periodically removing one letter from the 
    end of the string and attaching it to the front. 
*/

theTxt = [' ', ' ', 'w','3','r','e','s','o','u','r','c','e'];
console.log(theTxt[theTxt.length])
message = document.getElementById("message")
message.textContent = theTxt.join('');

setInterval(() => {
    moveWord()
}, 200);

function moveWord(){
    lastLetter = theTxt[11];
    theTxt.pop();
    theTxt.unshift(lastLetter);
    message.innerHTML = "";
    message.textContent = theTxt.join(''); 
}

/*
SOLUÇÃO DO SITE

HTML:
<body onload="animate_string('target')"
  <pre id="target">w3resource </pre>

JS:

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 // CONCATENAÇÃO ---> text = ÚLTIMA LETRA *concatenada* SUBSTRING DO ÍNDICE 0 ATÉ A PENÚLTIMA LETRA 
 //(no método substring, o valor no último índice é ignorado, não sendo incluído na substring)
 
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  
 //Portanto, última letra na primeira posição + o resto da string 
 //COM EXCLUSÃO DA ÚLTIMA LETRA QUE JÁ ESTÁ SENDO LEVADA PARA O INÍCIO DA NOVA STRING
 textNode.data = text;
}, 100);
}


*/