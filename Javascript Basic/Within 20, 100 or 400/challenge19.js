const number = 200

// V 1.0
// if(number - 20 == 0 || number - 20 <= 9 && number - 20 > 0){
//     console.log("dentro de 20")
// } else if(number - 100 == 0 || number - 100 <= 99 && number - 100 > 0){
//     console.log("dentro de 100");
// } else if(number - 400 == 0 || number - 400 >= 1 && number - 400 <= 99){
//     console.log("dentro de 400")
// }

// V 2.0
// if(number >= 20 && number <= 29){
//     console.log("tá em 20")
// } else if(number >= 100 && number <= 199){
//     console.log("tá em 100")
// } else if(number >= 400 && number <= 499){
//     console.log("tá em 400")
// }

// RESULTADO DO SITE
//o método abs retorna valores absolutos, não permitindo valores negativos, mas permitindo números decimais
function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
  }
  
  console.log(testhundred(10));
  console.log(testhundred(90));
  console.log(testhundred(99));
  console.log(testhundred(199));
  console.log(testhundred(405));

