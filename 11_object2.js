// 2. Using constructor

const bumblee= new Object() //empty object
console.log(bumblee);

//Adding data to the object 

bumblee.email="nish@bumblee.com"
bumblee.id = 1254
bumblee.isLoggedIn=false

console.log(bumblee);

//Nesting of objects and accessing them

const regularUser={

    email:"someone@anonymous.com",
    fullName:{
        userName:{
            firstName:"Nishan",
            lastName:"Das"
        }
    },
    age:28
}

console.log(regularUser.fullName.userName.firstName);

// -------------------------------------------------------------------
//Merging of Objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",5:"f"}

//problem is obj1,obj2,obj3 becomses the objects in obj4
const obj4={obj1,obj2,obj3} 
console.log(obj4);

//solves above merging  problem in two ways: 
//1.  using Object.assign(target,source)

const newObj =Object.assign({},obj1,obj2,obj3) //{} can be left for target as empty object and others as source...we can also give only the objects
console.log(newObj);

//2. using spread operator(...)
const finalObj={...obj1,...obj2,...obj3}
console.log(finalObj);

// ---------------------------------------------------------------

//Syntax when the values will come from database in array of objects

const users= [

    {
        id:1,
        email:"raj@gmail.com"
    },
    {
        id:2,
        email:"rom@gmail.com"
    },
    {
        id:3,
        email:"kamu@gmail.com"
    }

]

//To print the value
console.log(users[1].email);

//-------------------------------------------------------------------

//We can make the arrays of Keys and values from an Object (Very useful)

console.log(bumblee);

console.log(Object.keys(bumblee));
console.log(Object.values(bumblee));

//to make every key,value pair as an entry/array using entries(objectName)
console.log(Object.entries(bumblee));


//to check if any key is present or not using hasOwn()
//Syntax- Object.hasOwn(objectName,"Key")
console.log(Object.hasOwn(bumblee,"email"))








