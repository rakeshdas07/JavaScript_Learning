//Array written in square bracket and can store collection of multiple item in single variable and are mutable(can increase /decrease it's size)
//In JS array copy operation create shallow copies means-share same reference(memory address) so any changes will be reflected to it's original one... on the otherhand deep copy means they don't share the same reference


//two ways to declare the array
const myArr= [45,2,8,"Nish",54,2] //1st way
const newArr= new Array(1,2,"raj") //2nd way

console.log(myArr);
console.log(newArr);


//Array Methods
//Array got many methods, can see from the console

myArr.push("Nish")
console.log(myArr)

myArr.pop() //pop the last element entered
console.log(myArr)

myArr.unshift(9)    //it puts the element at the begining of the array by shifting all the elements by one place, takes lot of time for bigger number of elements

myArr.shift()  //act as a pop but from front

console.log(myArr.includes("Nish")); // includes() used to ask question, output is in boolean

console.log(myArr.indexOf("Nish")); // indexOF() used to give index of an element, if not in the array return -1

console.log(myArr.join()); //converts the array into string seperated by ,

console.log(myArr);


//Slice() and Splice() method

//slice() — Non-mutating. It includes start index and Excludes end index. Does NOT change the original array and Returns a new array. Syntax-    arr.slice(startIndx, endIndx)

console.log(myArr.slice(1,4));

//Splice- Mutating. It includes start indx and deletecount. Does change the original array and return the removed element. Syntax-    arr.splice(start, deleteCount)

console.log(myArr.splice(1,2));
console.log(myArr);


//--------------------------------------------------------
//Merge of two or more arrays


let marvelHeroes=["Thor","Hulk","Ironman"]
let dcHereoes=["Batman","Superman","Flash"]

//1. push() -problem is takes the array as one element
marvelHeroes.push(dcHereoes)

console.log(marvelHeroes); // what happened is it has taken dcHeroes i.e, an array as an element , instead of getting merge

console.log(marvelHeroes[3][2]); //To access flash

//2. concat() -solves problem of merge but works with 2 array

let heroes=marvelHeroes.concat(dcHereoes)
console.log(heroes); // [ 'Thor', 'Hulk', 'Ironman', 'Batman', 'Superman', 'Flash' ]


//3. spread- works for multiple arrays.. it breaks all the elements into individual element. syntax-   [...arr1,...arr2,...arrn]

let newAllHeroes=[...marvelHeroes,...dcHereoes]
console.log(newAllHeroes);

// ----------------------------------------------------

//how to handle array inside another array using flat()

//flat()- returns a new array with all sub arrays concatinated upto specified depth

const difficultArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const readableArr=difficultArr.flat(Infinity) //instead of infinity we should mention till what depth we want to flaten the array..

console.log(readableArr);



//-------------------------------------------------------
//used for data Scraping

console.log(Array.isArray("Rakesh")) //finds whether Rakesh is a array or not..return bool value

console.log(Array.from("Rakesh")) //from() converts Rakesh into array with each char as one element


//*** intersting for interview
console.log(Array.from({name: "Nish"}))// will return a [] empty string as it's an object of key value pair .. we have to mention to whom we need to make an array, whether it's key or value

//----------------------------------------------------------

//To create array using multiple single elements using of() method

let num1=100
let num2=520
let num3=800

console.log(Array.of(num1,num2,num3));




//Summary
/*
Mutating methods
-------------------
push() → add at end
pop() → remove from end
unshift() → add at start
shift() → remove from start
splice() → add / remove anywhere
sort() → sorts in place
reverse() → reverses in place
fill() → fills values
copyWithin() → copies elements inside array


Non-Mutating Methods
----------------------
slice() → extracts part
concat() → merges arrays
map() → transforms
filter() → filters
reduce() → reduces
includes() → returns boolean
indexOf() → returns index
find() → returns element
findIndex() → returns index
join() → converts array → string
toString()
every()
some()
*/








