// ES 6

class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return (`${this.password}abc`)
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const newuser = new user("vikas", "vk@gmail.com", "123")
console.log(newuser.encryptPassword())
console.log(newuser.changeUsername())

// behind scene for above program

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return (`${this.password}abc`)
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const happyuser = new user("happy", "happy@gm.com", "123")

console.log(happyuser.encryptPassword())
console.log(happyuser.changeUsername())