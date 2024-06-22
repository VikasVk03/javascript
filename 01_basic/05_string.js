const name = "vikas"
const repoCount = 50

//console.log(name + repoCount + " value"); // old way of writing, avoid it

//console.log(`Hello my name is ${name} and my repocount is ${repoCount}`); // modernway of writing, also use in backend.


const gameName = new String('vikas-vk-vk')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newStringOne = "     vikas    "
console.log(newStringOne)
console.log(newStringOne.trim()) // it removes empty spaces, it can be use in form, where user add extra spaces which we donot want to store in data base.

const url = "https://vikas.com/vikas%20vk"
console.log(url.replace('%20', '-'))

console.log(url.includes('vikas')) // it is use to know: '' is included or not 

console.log(gameName.split('-')) // it converts string to array.
