// "rakesh" + "Das" can be written like this directly in the console but here we do need to take the variables to store the string or the data
//strings can either be written in "" or ''


//Not recommended
let name="Rakesh "
let marks=50

console.log(name.toUpperCase()); //methods

console.log(name + marks + " Out of 100"); //can't use the methods here in string contatination , which can be done in the below solution that is string interpolation


// ---------------------

//Recommended
//USing String interpolation means inserting variables or expressions directly inside a string using placeholders ${} and we can add other methods (toUpperCase(),toLowerCase(),length,slice(startindx,endindx),subString(startiindx,endINdx), manymore) on the fly

console.log(`${name.toUpperCase()}got ${marks} out of 100 in English`)


//Another way to declare string, where we explicitly creates a string as an object using new String("") constructor , whose type is object

let studentId=new String("12asca")

console.log(typeof studentId,studentId);


// there are many Methods... important ones are below


console.log(studentId[0]) //shows the character at 0th index

console.log(studentId.charAt(4)) //shows the character in the given index

console.log(studentId.indexOf('s')) //shows the index at which the given character is

console.log(studentId.substring(1,4)) //end indx not included and can't use -ve indexing

console.log(studentId.slice(-3,6)) //end indx not included and can use -ve indexing,which start(-1) from end of the string

//Trim() - It removes whitespace from both ends of a string, while trimStart() (old one trimLeft())and trimEnd() (old one trimRight()) remove whitespace from the beginning and end respectively, remember - whitespaces not remove from inside the string

let email="     ahbjabhja@abshb.com     "
console.log(email)
console.log(email.trim())
console.log(email.trimStart())
console.log(email.trimEnd())


//Replace() - It finds a specific substring (or pattern) and replace it with another value.  string.replace(searchValue, replaceValue)

let url = "https://example.com/my%20page"
console.log(url)
console.log(url.replace("%20", "-"))


//In string we can even ask question as something is present or not using includes

console.log(url.includes("example.com")) //true
console.log(url.includes("rakeshpage")) //false


//Split()- It breaks a string into an array of substrings using a specified delimiter. string.split(separator, limit) //limit-max no of splits or result

let language = "Java Script Basics";
let result = language.split(" "); // here we are spliting based of " " space

console.log(result);




// ***
// Learn more about the methods of string  from mdn reference

