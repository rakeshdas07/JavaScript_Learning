/*
Variable can be declared in four ways in JS:
modern ways-                  const and let 
Older ways(Not recommended)-  var and automaticall
*/

const accountId=154454      //Const variable can't be changed/ altered and have block scope
let accEmail="rak@gmail.com" // let also has block scope
var accPassword="11656"     // var  has global scope 
accCity="Jaipur"


let address; //output would be undefined as the value is not defined to the variable
// accountId=2   X NOt allowed
accEmail= "nish@gmail.com"
accPassword=65469846
accCity="Dehradun"

//two ways to print..
// 1. using console.log()                   //can use to print multiple variables sepearted by ,
// 2. using console.table([])              //can use multiple variable all at once to get the output in tabular way
console.log("Account id is:",accountId);
console.table([accountId,accEmail,accPassword,accCity,address])

//To print the string and a variable(Three ways:)
//1. String interpolation
const name="Raj"
console.log(`My name is ${name}`);

//2. String concatination (+)

console.log("My name is " + name+".I love playing cricket");

//3. using comma

console.log("My name is ", name, ".I love playing cricket");