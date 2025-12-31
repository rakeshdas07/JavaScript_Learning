// problem with foreach loop is that... if we want to return any element , we can't do that.. so return is not possible in for each element.. example shown below

const codeIn=['js','py','cpp','java']

const gotVal=codeIn.forEach( (elem)=>{
    console.log(elem);
    return elem;
    
})
console.log(gotVal);


// here if we try to return the element and store it into the gotVal... we can't do it.. gotVal will have undefined...........So this problem is been solved by another method of array i.e, filter()



//filter() 

/*
same as foreach.. only difference is filter() returns a new array containing only those elements that satisfy a given condition. ..unlike foreach()

syntax:

const newArray = array.filter((element, index, array) => {
  return condition;
});
*/


const difficultArr=[1,2,3,4,5,6,7,6,7,4,5]

//remember if {} used then need return and () used then no need return 

const answer=difficultArr.filter( (ele) => ele>4 ) //here no need to write return
console.log(answer);

const result=difficultArr.filter( (ele) => { return ele>5} ) //here  need to write return.. since wrote {}
console.log(result);



// to do the same thing with foreach loop 
const finalResult =[]

difficultArr.forEach((num)=>{
    if(num>4){
        finalResult.push(num)
    }
})

console.log(finalResult);



// -----------------------------------------------------------------------------
//Question - values has been extracted from the DB..now user want some filters to get the value

const Books = [
  {
    title: "Book 1",
    genre: "Fiction",
    publish: 1981,
    edition: 2004
  },
  {
    title: "Book 2",
    genre: "Non-Fiction",
    publish: 1992,
    edition: 2008
  },
  {
    title: "Book 3",
    genre: "Science",
    publish: 2001,
    edition: 2012
  },
  {
    title: "Book 4",
    genre: "History",
    publish: 1988,
    edition: 2005
  },
  {
    title: "Book 5",
    genre: "Technology",
    publish: 2010,
    edition: 2020
  },
  {
    title: "Book 6",
    genre: "History",
    publish: 1999,
    edition: 2015
  },
  {
    title: "Book 7",
    genre: "Technology",
    publish: 2005,
    edition: 2018
  },
  {
    title: "Book 8",
    genre: "Science",
    publish: 1995,
    edition: 2010
  },
  {
    title: "Book 9",
    genre: "Science",
    publish: 2018,
    edition: 2021
  },
  {
    title: "Book 10",
    genre: "fiction",
    publish: 1975,
    edition: 1999
  }
]

//Wants those books whose genre is history
let userBook= Books.filter((bk)=> bk.genre == "History")
console.log(userBook)


//Name those books which are published after 2009
userBook= Books.filter((bk)=> {return bk.publish>2009})
console.log(userBook)


//Name those books which are published after 1995 and genre is science
userBook= Books.filter((bk)=> {
    return bk.genre ==="Science" && bk.publish>1995
})
console.log(userBook)






// --------------------------------------------------------------------------

//map()
// ------------------


/*
another array method is map(), same as filter.. but difference is 

filter() → selects elements
map() → transforms elements means adding, substracting .. it also returns new array same as filter

*/


const transformArr=[1,4,5,6,7,6,5]

//add 5 to each element
const transformedResult=transformArr.map((num)=> (num+5)) //this can be done using foreach
console.log(transformedResult);


//Chaining of maps 
//means arrName.map().map().filter .. can do any number of chaining


const mapChaining=transformArr
                        .map((num)=> num*10) //after tranforming, the resultant array is given to next .map method
                        .map((num)=> num+2) //after transforming from above two.. the resultant is given to next .mp inorder to /2
                        .filter((num)=> num==52) //after this resultant arr is given to mapChaining variable
    
console.log(mapChaining);




// --------------------------------------------------------------------------
//reduce()
// -----------------
/*
filter Used when you want some elements, not all
map transforms each element one-by-one,
reduce combines all elements into a single value/accumulate.

This is the fundamental reason reduce exists.
*/




