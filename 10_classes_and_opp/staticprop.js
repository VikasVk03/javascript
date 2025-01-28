class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }

    // static key stops the access
    static createId(){
        return `123`
    }
}

const vikas = new user("vikas")
// console.log(vikas.createId())

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// iphone.logMe()
console.log(iphone.createId())