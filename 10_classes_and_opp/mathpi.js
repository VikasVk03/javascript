// # interview question : can we change the value of PI in js? if yes, how and if no, why?

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: true, // true or false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
