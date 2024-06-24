// singleton - single object created by constructor
// when we declare literals then singleton is not formed
// {} - in curly braces object is created
//Object.create - constructor method to create singleton object

const mySym = Symbol("key1") // symbol datatype declaration
// interveiw Q : ek symbol lo usko object ki keys me add kro aur mujhe print krke dikha do

// object literal - we access object with keys and values
const JSUser = {
    name: "vikas",
    "full name": "Vikas Vishwakarma",
    age: 21,
    mySym: "mykey1",  // not correct as its datatype will be string
    [mySym]: "mykey1", // syntax to declare symbol   
    location: "Mumbai",
    email: "vikasvk@mail.com",
    IsLoggedIn: false,
    LastLoginDay: ["Monday", "Tuesday"], 
}

// to access objects value
//console.log(JSUser.location) // this is one method to access object... just write object name and dot suggestion will shown ex JSUser.name
//console.log(JSUser["email"]) // object value are seen as string, ["object value"] why this method as in objects we cannot access "full name" with dot method, to access it we have to use JSUser["full name"]

//console.log(typeof JSUser.mySym) // this method is not correct to declare and access object 
//console.log([mySym]) // this is correct method for symbol method

JSUser.email = "happy@hy.com" // to change value in object just write name with dot and equat with new value, it will overwrite old value
//Object.freeze(JSUser)  //Object on which to lock the attributes. Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
//JSUser.email = "hello@jjj.com"
//console.log(JSUser)

// Function
JSUser.greeting = function(){
    console.log("Hello JS User")
}
JSUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}


console.log(JSUser.greetingTwo)
console.log(JSUser.greetingTwo())