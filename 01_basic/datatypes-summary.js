// jis tarike se data ko memory me store aur access kiya jata, datatypes two categoies me divided hi 

// primitive // this are call by value, means whenever we copy.. do revision ****

// 7 types: string, boolean, number, symbol, null, undefined, BigInt.


const score = 100
const scoreValue = 100.3

const IsLoggedIn = false
const OutTemp = null
let userEmail;

const Id = Symbol('123')
const AnotherId = Symbol('123')

console.log(Id == AnotherId);

const BigNumber = 9839865679891235544423463243n



// Reference type (non-Primitive)
// Array, Object, Function

const heros = ["shaktimaan","nagaraj","doga"] // array are written in block braket
let myObj = { // object is written in curly braket
    name: vikas,
    age: 21,
}

//function(){} // function syntax
const myFunction = function(){
    console.log("hello world");
}
