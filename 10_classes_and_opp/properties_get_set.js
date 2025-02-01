// get and set (technique 2) 
// old technique for getter and setter ans new method (gettersSetters.js)


// function based syntax for get and set
function user(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const vikas = new user("vikas@vk.com", "asd")

console.log(vikas.email)