/*
Let's take an e-commerce cart example... suppose user adds n number of items into the cart.  Using the 1st way can't take multiple item as an argument can take only one item (or fixed parameter). SO it's not a ideal way to handle the problem instead we can use 2nd way using the REST parameter(dynamic parameter)


1.Incorrect way: Fixed number of parameters

function addToCart(item1) {
  // useless if user adds n items
}



2. Correct way: REST parameter (dynamic)

function addToCart(...items) {
  console.log(items);
}

addToCart("phone", "charger", "case", "earphones");



Output:
["phone", "charger", "case", "earphones"]


👉 items becomes an array automatically
👉 Any number of arguments? Handled.
👉 This is REST.


Why it’s called REST? Because it collects “the rest of the arguments”.


RULE to remember:
>> Function parameters → it’s called REST
>> Passing values / arrays / objects → it’s called SPREAD
>> REST collects, SPREAD expands.
*/

function cart(...items){

    return items
}

console.log(cart("milk","pencil","books","PS5","mobile"))


// OR


function items(thing1,thing2,...things){ //thing1=milk,thing2=pencil, things=rest of the items

    return things
}

console.log(items("milk","pencil","books","PS5","mobile")) 

// -------------------------------------------------------------------------------------
//Objects passing to a function


const buy={
    itemName: "Biozyme",
    price: 2999.39

}

function handleObject(anyObject){ 

    console.log(`I bought ${anyObject.itemName} at ${anyObject.price}`);
    

}
handleObject(buy)
//like above we have created an object and passed the object nameto the function as an argument.. or we can directly pass an object as an argument

handleObject({
    itemName:"Wellcore Creatine",
    price: 299.99
})


// -------------------------------------------------------------------------------------
//Array passing to a function

const arr=[5,9,7,2,3,6]

function secondEle(myArr){
    return `Second element of an array is ${myArr[1]}`
}

console.log(secondEle(arr))

console.log(secondEle([4,3,6,1,8,10])) // can pass the array as an argument
