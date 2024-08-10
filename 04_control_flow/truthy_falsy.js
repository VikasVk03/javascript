// const UserEmail = "vikas@gmail.com"
// humne program run with above string value, but what if we change the value and datatype does  it successfully or not, 1. we put empty string "" it excute else statement as condition is false 2. we put empty array [] excute if statement as condition is true, in real world it will create problem.
 
// if (UserEmail) {
//     console.log("Got the user email")
// } else {
//     console.log("Does not have email")
// }

// falsy value 
// false, 0(zero), -0(-ve zero is also falsy value it is asked in interview), BigInt 0n, "" (empty string), null, undefined, NaN (not a number)

// except above all other are truthy value
// truthy value
// "0" (zero in string is consider as truthy value asked in interview),  'false' (it is also truthy any thing in single or double qoute is considered as truthy value even empty space), [], {} object, function(){} empty function,

const Usermail = []
// if (Usermail.length === 0) { // .lenth   Gets or sets the length of the array.
//   console.log("Array is empty")  
// }

const Emptyobject = {}
if (Object.keys(Emptyobject).length === 0) {
    console.log("Object is empty")
}

// value comparison , useful in interview and competitive programming
// false == 0, false == ""('' or ""), 0 == '' alse are true as their coparision value is same.

// Nullish coalescing operator (??): null, undefined (everything to see in null and undefined)
// kai bar yesa hota hi ki hum database se kuch value call kiya hi per ov kuch return nhi krta toh ise program pareshan hojayega , ?? ye mutiple value hold krta hi agar first value null ya undefined ayi toh ov uske bad ki value ko return krega.
let val1 = 10 ?? 15
let val2 = null ?? 10
let val3 = null ?? 17 ?? 12
let val4 = undefined ?? null ?? 14
// nullish coalescing operator aur ternary operator alag hi
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)

// ternary operator
// condition ? true : false 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("price is less than 80") : console.log("price is greater than 80")