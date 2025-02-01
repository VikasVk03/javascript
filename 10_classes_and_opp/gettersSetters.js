// get and set code 1 (technique or way 1)

// class based syntax
class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password  = value.toUpperCase()
    }
}

const vikas = new user("vikas@vk.ai", "abc")
console.log(vikas.password)
console.log(vikas.email)