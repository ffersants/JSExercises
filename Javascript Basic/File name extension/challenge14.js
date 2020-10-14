filename = "docWord.docx";

extension = filename.substr(filename.indexOf("."), filename.length);

console.log(extension)

//resolucao do site
console.log(filename.split(".").pop())


// o metodo split separa uma string em um array de string, tomando como referencia o parametro passado, que eh tido como o separador, ele 
// eh equivalente ao explode do PHP
//Quando encontrado, o separador é removido da string e as substrings são retornadas em um array. 
frase1 = "frase-dividida-com-base-nos-hifens";
console.log(frase1.split("-"))

//Se o separador não for encontrado ou for omitido, o array irá conter um elemento consistindo da string inteira
frase2 = "frase-inteira-e-nao-dividida"
console.log(frase2.split("."))//separador nao encontrado
console.log(frase2.split())

//Se o separador é uma string vazia, str será convertido em um array de caracteres.
console.log(filename.split(""))