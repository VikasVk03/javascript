// function
function sayMyFunction(){
    console.log("v");
    console.log("i");
    console.log("k");
    console.log("a");
    console.log("s");
}

// sayMyFunction - its reference {app bata rhe hi function vaha rehta hi},    sayMyFunction() - excute when typed () after name of function

// sayMyFunction()

// function addTwonumbers(number1, number2) { // addTwonumber(parameter)
//     console.log(number1 + number2)
// }

function addTwonumbers(number1, number2) { // addTwonumber(parameter)
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("vikas")// it will not be printed, after return function stops and does not excute
}

//addTwonumbers(3, 4) // addTwonumber(arguments)

const result = addTwonumbers(3, 5)

// console.log("Result: ", result)

function LoginUserMessage(username) {
    // if (username === undefined) {
    if (!username) {
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(LoginUserMessage("vikas"))
console.log(LoginUserMessage())