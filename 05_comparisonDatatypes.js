//Basic comparisons

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);


//string compare with number: strings gets converted to number

console.log("2">1);     //true
console.log("02">1);    //true




// == (double equals) has special rules. Those weird rules apply mainly to null and undefined. Relational operators (> < >= <=) work differently from ==
//Null doesn't converted into 0 incase of == ,in other case it do gets converted into 0

//NULL comparisons

console.log(null == undefined )            // true
console.log(null == 0 );                   // null == anythingElse // false
console.log(null == null);                 //true

console.log(null > 0 );              // false
console.log(null == 0 );             // false
console.log(null >= 0 );             //true




//Undefined comparisons

console.log(undefined == undefined );       //true
console.log(undefined == 0);                //undefined == anythingElse // false



//=== strict check means it checks both the values as well as the datatypes
// so above comparisons with == to null,undefined or string to number must be done with strict equalto(===)

console.log(null===undefined)   //false
console.log(null===0)           //false
console.log("0"===0)            //false


