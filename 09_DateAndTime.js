const myDate=new Date() //stores current instance time
console.log(myDate,typeof myDate); //2025-12-29T11:09:58.148Z



//Methods of the date- converts the ouput in some way so it becomes readable

console.log(myDate.toString()); 
console.log(myDate.toISOString()); 
console.log(myDate.toJSON()); 
console.log(myDate.toLocaleDateString()); 
console.log(myDate.toLocaleString()); 


//My own date

const myCreatedDate= new Date(2023,0,5)
console.log(myCreatedDate.toString())

const myCreatedDate2= new Date(2023,0,5,2,7) //month start from 0
console.log(myCreatedDate2.toLocaleString())

//specific format
let specificFormatDate= new Date("2025-01-30")
console.log(specificFormatDate.toLocaleString())

// -----------TIMESTAMP---------------------
let myTimestamp= Date.now()
console.log(myTimestamp); //1767007828682 it's a milli second

//to compare to time- we convert the date in timestamp
console.log(myDate.getTime()) //1767007962270 , gives milli second time

//to convert into second

console.log(Math.floor(myTimestamp/1000)) //1767008087 sec


//To get specific info like day,date,year,etc

let newDate= new Date()
console.log(newDate.getDate()); //gives today's date
console.log(newDate.getDay()); //gives day of the week(monday=1,sunday=7)
console.log(newDate.getFullYear()); //gives which year it is
console.log(newDate.getHours()); //gives which hour it is
console.log(newDate.getMonth()); //gives today's month



//Very important with toLocalString(), we can customize it 
newDate.toLocaleString('default',{

    weekday: "long", //can keep short,narrow
})








