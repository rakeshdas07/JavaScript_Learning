// Immediately Invoked Function Expressions(IIFE)
/*
An IIFE is used to execute a function immediately and to prevent variable pollution of the global scope. 
While let and const reduce global scope pollution, IIFEs are still useful for immediate execution, true encapsulation, and legacy JavaScript patterns.
*/

//Syntax of IIFE= (normal function/arrow funciton decleration)()

//NOrmal function IIFE is called Named IIFE
(function DB(){

    console.log(`Database is connected!`)
    
})(); //when two IIFEs are written one after another, a semicolon ; is REQUIRED to separate them

//Arrow function IIFE is called Unnamed IIFE

(
    ()=>{
        console.log(`Call me once js is done!`);
        
    }
)();

//HOw to pass arguments in the Arrow function on IIFE
(
    (person)=>{
        console.log(`${person}, is done and dusted for the day!`);
        
    }
)('Nish')// pass argument ()(here); treat it as a function call (function)(arguments)