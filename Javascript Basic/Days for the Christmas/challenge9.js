


//new Date(year, month, day, hour, minut, second, milisecond)

todayIs = new Date();
christmaDay = new Date(todayIs.getFullYear(), 11, 25);

difference = Math.ceil(Math.abs(christmaDay - todayIs) / (1000 * 60 * 60 * 24));


/*
GET THE DIFFERENCE BETWEEN TWO DATES
https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
*/
switch (difference) {
    case 1 : 
        console.log(`Está faltando ${difference} dia para o natal!`);
    break;
    
    default :
        console.log(`Estão faltando ${difference} dias para o natal!`);
    break;
}

