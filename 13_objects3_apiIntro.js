//Object De-Structure: It's an syntactical sugar.. way to print the data

const teacher={

    subjectName: "Mathematics",
    price: 999.99,
    subjectTeacher: "Rakesh" 
}

//Suppose, we have to print the subjectTeacher name multiple times.. so can't write console.log(teacher.subjectTeacher) every time.. instead we De-Structure it.. like shown below                                          Syntax:   
//1st Way:      const {key} =objectName // we can use key only after 
//2nd Way:      const {key: alais} =objectName // now we can use alais only

const {subjectTeacher}=teacher  //we can use the key to print it's value
console.log(`The subject teacher of Maths is ${subjectTeacher}`);



const {subjectName: subject}=teacher //if key name is bigger can shorten it up by creating, key's alais to use
console.log(`The subject teacher of ${subject} is ${subjectTeacher}`);


// ------------------------------------------------------------

//JSON API Intro

/*
JSON is written inside an object like this {} or an objects of array [{},{},{}] without an object/array name

..and key is written as string only
Example

{
    "subjectName": "Mathematics",
    "price": 999,
    "subjectTeacher": "Rakesh" 
}

Example: https://api.github.com/users/hiteshchoudhary


-> Randomuser me api = used for generating placeholder user info

if the json is not readable, can go to json formatter and format it
*/


