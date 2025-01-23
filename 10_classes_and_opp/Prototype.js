// create a method that can calculate length by triming space

// let myName = "vikas    "
// let channel = "chai    "

// console.log(myName.trueLength)

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "slang",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}


// prototype or new property is injected explicitly in object in following example
Object.prototype.vikas = function(){
    console.log(`vikas is present in all object`)
}

Array.prototype.heyVikas = function(){
    console.log(`vikas say hello`)
}

// heroPower.vikas()
// myHeros.vikas()
// myHeros.heyVikas()
// heroPower.heyVikas()  // it does not have access to heyVikas()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()