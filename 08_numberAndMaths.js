const n=550 // it's a number...to explicilty mention the datatype as number using new shown below
const num= new Number(124.4548)

console.log(n); //550 ;it automatically detects it's a number
console.log(num);//[Number: 100] ; it tells that 100 is of type number

//press this in console
/*
const num=new Number(100)
console.log(num)

o/p- going to the prototype we can get to see all the methds we can use
Number {100}
[[Prototype]]: Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0
[[PrimitiveValue]]: 100
*/

//Number Methods

console.log(num.toString().length) //can check using typeof

console.log(num.toFixed(2)) //fix the decimal value, here it's fixed to 2 decimal places

console.log(num.toPrecision(4)) //round of basically to get the precise value 4 represents total number of digits is a given number 


let anotherNum=10000000
console.log(anotherNum.toLocaleString()); //it change the represnetation of the number using commas ,by default US standard 
console.log(anotherNum.toLocaleString('en-IN')); //change it to Indian standard

// -----------------MATHS---------------------------------------------

//to see all the properties write the Math in the console to see all the properties it has

console.log(Math.PI) //like PI and other we have there values fixed
console.log(Math.abs(-4))
console.log(Math.round(4.6))    //we have it's two variants ceil &floor ,but round is used most of the time
console.log(Math.ceil(4.6))
console.log(Math.floor (4.6))
console.log(Math.pow(2,5))
console.log(Math.min(2,9,5,0,3))
console.log(Math.max(2,9,2,5,10))



//random() -gives values at random between 0 to 1 (0 and 1 inclusive)

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

//above same thing can be done in more simple way
const min=10
const max=20

//we want the value to be between min and max
console.log(Math.floor(Math.random()* (min-max+1))+min);




