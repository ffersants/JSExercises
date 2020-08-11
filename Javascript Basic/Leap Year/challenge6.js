
year = 2044;

if (year % 4 === 0){
    console.log(`O ano ${year} é bissexto!`);
} else if (year % 100 && 400 === 0){
    console.log(`O ano ${year} é bissexto!`);
} else {
    console.log(`O ano ${year} NÃO é bissexto!`);

}
/*
website solution...
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2013));
*/