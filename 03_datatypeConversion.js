let score="33abc"

console.log(typeof score);

//TO convert into number

let convertedScoreToInt= Number(score)

console.log(typeof convertedScoreToInt,convertedScoreToInt);

// COnversion to Number
/*
"33" => 33
"33abc" => NaN (not a number)
true => 1
false => 0
*/

//Conversion to Boolean

let isLoggedIn =1

let convertedToBool= Boolean(isLoggedIn)

console.log(convertedToBool, typeof convertedToBool);

//Conversion to Boolean
/*
1 => true
0 => fasle
"" => fasle
"rakesh" => true
*/

//Conversion to String

let someNum= 33
let convertToString =String(someNum)

console.log(convertToString, typeof convertToString);



