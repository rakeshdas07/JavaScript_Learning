/*
Function Syntax-
1. in this even if we write the arguments/print it before the function decleration..it will work completely fine this process is called hoisting
-> Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the memory-creation phase.

function myFunctionName(parameters){    //function decleration

}

myFunctionName(Arguments)    //function call


2.in this  if we try to write the arguments/print it before the function decleration..it won't work...thow an error


const var= anotherFunction(parameters){
    return xyz
}

anotherFunction(arguments)

*/


function myGreetings(){

    console.log("Hello beautiful people!");
    
}
myGreetings()



function addNo(num1,num2){  //we dont usually mention the datatype
    
    return num1+num2;
    
}

const result=addNo(3,7.235)  //since didn't mention the datatype in the parameters.. becomes difficult can have anything not just numbers
console.log(result);


function greet(username){

    return `${username}, Hello man!`
    
}
console.log(greet("Rakesh")); //if not passed any argument .. the result would be undefined




function greet(username){

    if(username===undefined){   //!username
        console.log("Please enter username");
        return
    }
    return `${username}, Hello man!`
}

greet();


//if suppose user forgot to enter a user name ,we keep a deafult username to the parameter ..and user enter the username .. the parameter gets overwritten by the username entered

function welcome(name="User"){

    return `Hello ${name}! `
}

console.log(welcome())
console.log(welcome("Rakesh"))




