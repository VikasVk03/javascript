function setUserName(username){
    // complex db call 
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUserName.call(this, username) // understand call method and this 

    this.email = email
    this.password = password
}

const newuser = new createUser("vikas", "vikas@gm.com", "123")
console.log(newuser)