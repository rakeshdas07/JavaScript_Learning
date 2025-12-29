 /*
->Objects are declared in two ways: Object literal  and constructor
-> Literal object don't create singleton object (non-singleton), Whereas Constructor create singleton object
-> Objects have key value pair
-> Syntax- Object literal=   const variableName={}     //Empty object     
            Constructor  =   const variableName= new Object() //Empty object
           
*/


//1. Object Literals
//-------------------------------------------------------

//here remember key has been act as a string by the compiler ,i.e, name t's "name"

const mySym= Symbol("Key")

const jsUser={
    name:"Nish",
    age:28,
    [mySym]:"anotherKey", 
    "fullName":"Nishan Das",
    location:"Guwahati",
    email:"nish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Wednesday"]
}

//There are two ways to access the objects:
//i)
console.log(jsUser.name)
//ii) Needed when, if the Key is written as string only then 1st method won't work 
console.log(jsUser["fullName"]) 

console.log(jsUser)  // since mySym is a symbol, to declare it in object to use as a symbol , the variable must be written in a square box, [mySym]; if written as mySym - it will act as string


//To change the value of a particular key
jsUser.email="rakesh@google.com" 
console.log(jsUser);

//Object.freeze(objname) - so the object shouldn't get altered

Object.freeze(jsUser)
jsUser.age=50
console.log(jsUser); //No changes have been made


//Function to treat as variable usign object by adding the function to the object (make sure you remove the freeze())

jsUser.greet= function(){
    console.log(`Hey there ${this.fullName}`); //this is a pointer referencing to the jsUser object and access any key
    
}
console.log(jsUser); //we can see that function has been added





