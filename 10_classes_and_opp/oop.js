const user = {
    userName: "vikas",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from data base");
        // console.log(`userName: ${this.userName}`)
        console.log(this) // this talks about current context i.e function context
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this)  // this talks about global context

function users (username, logInCount, isloggedIn){
    this.username = username,
    this.logInCount = logInCount,
    this.isloggedIn = isloggedIn

    return this
}

const userOne = new users('vikas', 5, true)
const userTwo = new users('manoj', 10, false)

console.log(userOne)
console.log(userTwo)