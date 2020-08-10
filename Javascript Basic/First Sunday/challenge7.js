for (ano = 2014; ano <= 2050; ano++){     
        data = new Date(ano, 0, 0)
        if(data.getDay() === 0){
            console.log(data)
        }
}  
