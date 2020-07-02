
today = new Date()

today.getDate() < 10 ? day = '0' + today.getDay() : day = today.getDay()

month = today.getMonth() + 1 
month < 10 ? month = '0' + month : false

year = today.getFullYear()

/////////FIRST OUTPUT //mm-dd-yyyy
firstOutput = `${month}-${day}-${year}` 

console.log(firstOutput)

/////////SECOND OUTPUT //mm/dd/yyyy
secondOutput = firstOutput.replace(/-/g, '/')
// .replace(/caracter to be replaced/g, 'x') -> makes the change global, all of the caracters are selected and changed to 'x'



