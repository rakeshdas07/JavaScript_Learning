//in real life, we will get to see strings in arrays like ["","",""] and siimillarly we have objects in the arrays [{},{},{}].. it's a common scenario, we ll have array and inside that we will have objects and we need to get the values out of it

// forof loop 

/*
syntax:

for (const element of object) {  //we can use anything not only object, can use on array,string,maps,sets,nodelists..remember object can't be directly iterable in forof loop

*/

let arr=[1,2,3,5,8]
for (const val of arr) {
    console.log(val);
    
}

const name="Rakesh Das"
for (const eachChar of name) {
    console.log(`character is ${eachChar}`);
    
}
// ---------------------------------------------------------------------------------------------------

//Map


//it also has a key value pair.. difference between object and map is, map stays in the same order  and has no duplicates(unique), even if we keep duplicate values it will show only the uniques
const myMap= new Map()

myMap.set('IN',"INDIA")
myMap.set('USA',"The United States of America")
myMap.set('AUS',"Australia")
myMap.set('IN',"INDIA")

console.log(myMap);

//Forof loop on map
// ------------------------------------------------
for (const country of myMap) {  //this way it will print the whole map only
    console.log(country); 
    
    
}

//to print the keys and values sepeartely , have to declare in key value pair using [], [key,value]

for (const [code,countryName] of myMap) {
    console.log(`${code} stands for ${countryName}`);
    
    
}



// Forof loop works on iterables(arrays,maps,strings,set) but object is not iterables
//forof loop return values 


// -----------------------------------------------------------------------------------------------


//2. forin loop -  it returns keys/indexes


// here in array it return the index as a key, not the value direct as in forof loop... but we can access the values here as arrName[key] and another is can't  use forin loop  on map as well 
//for object
const newObj={
    item:"Book",
    price:99.23
}

for (const key in newObj) { // here key always hold key of the objects.. to get values objName[key]
    
    console.log(`${key} is ${newObj[key]}`);
    
}

//for Array (but not recommended)

const languages=['js','py','cpp']
for (const lang in languages) {
    
    console.log(`At ${lang} index the value is ${languages[lang]}`);
}

//Foreach loop


//forEach a method (property) of the Array prototype in JavaScript.
// ForEach is used to run a function once for every element in an array.
 
const codeIn=['js','py','cpp','java']

//using normal function

codeIn.forEach(function(lang) {     //lang takes one by one element from the array

    console.log(lang);
    
})
    
//Using arrow funciton

codeIn.forEach((val) => {     //val takes one by one value from the array 
   
    console.log(val);

});

//function passed to the foreach 

function greet(codinglang){
    console.log("Hiiiiiiiiiiii", codinglang);
    
}

codeIn.forEach(greet) //passing functon name as an parameter to give reference

// forEach brings value,index, wholearray 
codeIn.forEach((value,indx,wholeArr)=>{

    console.log(`${value} is at ${indx} and the whole array is ${wholeArr}`);
    
})

//-----------------------------------------------------------------------

//Suppose we have array of objects ; [{},{},{}]

const programming=[

    {
        languageName: "Javascript",
        languageFilename: ".js"
    },
    {
        languageName: "python",
        languageFilename: ".py"
    },
    {
        languageName: "C++",
        languageFilename: ".cpp"
    }

]

programming.forEach((ele) => {
    console.log(ele.languageFilename);
    // console.log();
    // console.log();
    
});