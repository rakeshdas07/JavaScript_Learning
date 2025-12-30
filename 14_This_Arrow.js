//This Keyword- used to refer to the current calling context (usually an object) so a function can access or modify its data

const user={
    userName: "Rakesh",
    price: 999.99,
    welcomeMsg: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this); //shows the current object( here it's user)
        
    }
}

user.welcomeMsg()
user.userName="Nishan"
user.welcomeMsg()

// "this" in node global object  vs console global object, it's different:
// --------------------------------------------------------------

//"this" in node provide empty global object
console.log(this); //empty object {}

//in console "this" has windows{many key:value pairs} global object


//"this" keyword inside function
function one(){
    const userName="Raj"
    //console.log(this); // here we can see this has many things in it
    console.log(this.userName); //can't use this in function shows undefined
}
one()


// --------------------------------------------------------------------------
// Arrow function-


/*
this are function expression, not a decleration; that means
i) It does not have its own name
ii) It must be stored somewhere (usually in a variable)

Syntax:
Decleration
let x= ()=>{    
    
    }

Calling
x()
*/

//Basic Arrow function also called explicit return

let Drinkchai= ()=>{
    console.log("Drank the chai")
    console.log(this) //shows empty object
    
}

Drinkchai()


//implicit return- It's a feature of arrow function 
/*
Implicit return means an arrow function automatically returns a value without using the return keyword.

This works only when:
1. The function body has a single expression
2. Curly braces {} are NOT used
*/

const sum= (num1,num2) => (num1+num2)  //we can remove () around num1+num2
console.log(sum(5,4));

//remember if {} used then need return and () used then no need return 


//to return object using implicit return, since object need {}, we can write ({})

const mail= () => ({email: "asd@google.com"})  // we can remove () around num1+num2
console.log(mail());

//-----------------------------------------------------------------

// Difference between normal functiona and arrow function


//1. Normal function → this is dynamic
const obj = {
  name: "Raj",
  greet() {
    console.log(this.name)
  }
};

obj.greet()  // Raj

/*
Here:
this is decided at call time
Depends on who calls the function
Lexical position doesn’t matter.
*/

//2. Arrow function → this is lexical
const obj1 = {
  name: "Raj",
  wish: () => {
    console.log(this.name);
  }
};

obj1.wish(); // undefined

/*
Why?
Arrow function has no own this
It captures this from where it is written
If written in global scope:
this → window (or undefined in strict/module)
*/


//3. Arrow function inside a normal method (best use)

const obj2 = {
  name: "Raj",
  greeting() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj2.greeting(); // Raj

/*
Why this works:
greet() is a normal function → this = obj
Arrow function borrows that this
This is the correct pattern.
*/