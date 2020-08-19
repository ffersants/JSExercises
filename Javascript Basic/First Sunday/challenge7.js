for (ano = 2014; ano <= 2050; ano++){     
    //new Date(year, month, day, hour, minut, second, milisecond)    
    data = new Date(ano, 0, 0)
        if(data.getDay() === 0){
            console.log(data)
        }
}  
