// in this we will learn to control the excution of program.
//if

const UserIsLoggedIn = true
// if( 2 == "2"){
//     console.log("excuted")
// }

// >, <, >=, <=, 
// = assignment operator
// == equal operator, checks value is equal 
// === strict equal, cheque value and datatype is equal or not 
// !== not equal value,

// if else
const temperature = 51

// if (temperature < 50) {
//     console.log("temperature is less than 50");
// }
// else {
//     console.log("temperature is greator than 50")
// }

// here we understand scope of const, let and var also not to use var
// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)

// **************implicite scope (yani ki mane man liya hi)***********

const balance = 1000

// if (balance > 500) console.log("tested"); // ye implicite scope, last me semicolon lagana jaruri hi ye ek hi line me likha jata hi, multiple line me bhi likha ja sakta hi, coma lagake age new statement likh sakte hi exaple niche hi

// if (balance > 500) console.log("test1"), console.log("test2"); // per ye practice sahi nhi hi kyu ki bahut hi unreadable code hi, aur jada tar scope {} ko use kiya jata hi, companies me ye accepted nhi hi
// nested code,  using balance 1000

// if (balance < 500) {
//     console.log("less than 500")
// } 
// else if (balance < 750) {
//     console.log("less than 750")
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard =  true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if (loggedInfromEmail || loggedInfromGoogle) {
    console.log("User is LoggedIn")
}