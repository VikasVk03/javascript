class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USER NAME is : ${this.username}`)
    }
}

class Teacher extends user {
    constructor(username, email, password){
        super(username)  // this simplify work of call and this to invoke another function, ye super key word automatically refer krega ki ap konse class extend kr rhe the (user), toh phir user class aur uska constructor me jayega aur sath me this(Teacher context ka), this ko waha pe set krega aur uski value defined hogi aur phir Techer class me access kr sakenge
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()

chai.logMe()
const masalaChai = new user("masalaChai")

masalaChai.logMe()

console.log(chai === masalaChai)
console.log(chai instanceof user);
console.log(chai instanceof masalaChai);