//If
//Comparison operator: >,<,<= >=, !=, ==, ===, !==

if(2=="2"){
    console.log(`Line got executed`); //got printed even tho one is string and another is number datatype
    
}

//For the above problem, we use strict check ===, which checks datatype along with the value

if(2==="2"){
    console.log(`Line got executed`); //got printed even tho one is string and another is number datatype
    
}
else {
    console.log(`Not get executed`);
    
}

// there is if{} else if{} else{} and nested if condition

//Logical operators - && (And) ,    || (OR)

// --------------------------------------------------------------------------------------------
//Switch

const initialofName="D"
switch (initialofName) {
    case "A":
        console.log(`Name starts with A`);
        break;
    case "B":
        console.log(`Name starts with B`);
        break;

    default:
        console.log(`Name neither starts with A or B`);
        
        break;
}


// --------------------------------------------------------------------------------------------------------

//Falsy and truthy values
/*
Fasly values=  false, 0, -0, 0.0, "", null, undefined, Nan
Truthy values= everything other than falsy values are truthy values but some values that confuses up are:
"0",  Bigint 0n, 'false', " ", [], {}, function(){} 


false == 0      => true
false == ''     =>true
0 == ''         =>true
*/



// ------------------------------------------------------------------------------------------------

// checking of empty array

const arr=[]

if(arr.length===0){
    console.log(`Array empty`);
    
}else{
    console.log(`Array Not empty`);
    
}

//checking of empty object= convert object values into arrays then using above way

const emptyObject={}

if ((Object.keys(emptyObject)).length ===0) {     //Object.keys(objectname)  return array of keys for objectName 
    
    console.log(`Object is empty`);
    
} else {
    console.log(`object is not empty`);
    
}


// -----------------------------------------------------------------------------------------

//Nullish Coalescing Operator (??)

// ?? only checks for null and undefined
// ?? is evaluated left → right, and as soon as it finds a value that is NOT null or undefined, it stops and returns that value.

// answer=""?? null                             //answer = ""
// answer=null?? 5??undefined                   //answer = 5
answer= undefined??function(){} ??null          //answer = function

console.log(answer);

/*
Why this operator was introduced (important)

Imagine user input:
let itemsInCart = 0;


Now:

itemsInCart || 5   // ❌ gives 5 (WRONG)
itemsInCart ?? 5   // ✅ gives 0 (CORRECT)


Because:
0 is valid, but || treats it as false, where as, ?? does not. This is why ?? exists.

*/



//Ternary Operator (?)
//condition? true: fasle