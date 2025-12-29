//Stack memory- Premetive datatype uses it
/*
When uses a stack memory, we get the copy of the variable.. so original value get unaffected
*/


let myYoutubename= "Rakesh"
let anotherName=myYoutubename

anotherName="Nishan"

console.log(name,anotherName);



//Heap memory- Non -Premetive datatype uses it  
/*
When uses a heap memory, we get the original reference of the variable... so original value get affected
*/

let userOne={
    email: "noone@gmail.com",
    upi:"51a5da5f"
}

let userTwo=userOne
userTwo.email="rakesh@gmail.com"

console.log(userOne.email, userTwo.email);


// ...See the pictorial representation in readMe file