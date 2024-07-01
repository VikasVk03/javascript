const user = {
    username: "vikas",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "manoj"
// user.welcomeMessage()

// console.log(this) // this will give {} as output, when this is given to browser window is output.

// function chai(){
//     let username = "vk"
//     console.log(this.username)
// }

// chai()

// difference b/w arrow and normal function.. output of (this) in arrow and normal function with reason 

const chai = () => {
    let username = "vk"
    console.log(this.username)
}

// chai()

// () => {} array function syntax 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// impliction function i.e man leta hun ye yese hi hai

// const addTwo = (num1, num2) =>  num1 + num2 
// const addTwo = (num1, num2) =>  (num1 + num2 )
const addTwo = (num1, num2) =>  ({username: "vikas"}) //syntax for object with arrow function


console.log(addTwo(3, 4))