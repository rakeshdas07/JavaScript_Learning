// Datatypes are divided based on 
// i) How their values are stored in memory
// ii) How those values are accessed or passed (copied vs referenced)

//--------------------------------------------------------------------------

//Two types:

// i) Premetive datatypes(call by value): Primitive types store the actual value directly in memory. When a value is assigned or passed,a copy of the value is created changes affect only the copy, not the original

/*
number
BigInt 
string = ""
boolean = true
null  = it's a standalone value, it means empty(not 0) and it's type is object
undefined  = value has not been defined yet and it's type is undefined only
symbol = to make variable uniquely identify...even if we give the same id to two different varaible but still the return type would be different
*/

let x=5             //number
let isEmpty =false   //boolean
let name= "Rakesh"  //string
let raj


//symbol example/usage

let id=Symbol('123')
let anotherId=Symbol('123')

console.log(typeof id);


console.log(id === anotherId);   //false, their return type is still different

// Example of BigInt - add n in the end of the number to make it bignt
const bigNumber=11651954921131n     
console.log(typeof bigNumber);


console.table([typeof(x),typeof isEmpty,typeof name, typeof raj ,typeof (null)])

//-----------------------------------------------------------------------------

//Non-Premetive datatypes (referenced types): arrays,object,function
/*
->Non-primitive types store a reference (address) to the actual data in memory. means 
-> For non-primitive (reference) data types, the value stored in the variable is the reference (memory address) to the actual data.

-> isEmpty.e,
The value itself = reference
JavaScript still uses call-by-value
The copied value just happens to be a reference
*/

//Array
const heroes =["shaktimaan", "nagraj", "Ironman"]

//Object  key:value pair
const myObject={

    name:"Rakesh",
    age: 45,
}

const myFunc= function(){
    console.log("Hi there!");
    
}

console.table([typeof heroes, typeof myObject, typeof myFunc])

//Summary
/*
Premetive:                      type

number                          number
Bigint                          bigint
boolean                         boolean
string                          string
symbol                          symbol
null                            object
undefined                       object


Non Premetive                    type

Array                           object
object                          object
function                        function object

*/
// ----------------------------------------------------------------------

//JavaScript is a dynamically typed language because you do not need to specify the data type of a variable when declaring it.