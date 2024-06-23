// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktimaan", "krish", "krishna"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1])
// console.log(myHeros[2])

// Array methods
// myArr.push(6) // adds new element in last of array
// myArr.push(7)
// myArr.pop() // it removes last element in array

// myArr.unshift(9) // adds new element in first position
// myArr.shift()  // removes first element in array


// console.log(myArr.includes(9)) // its is used to known (9) is present in array or not... answer in boolean i.e T/F
//console.log(myArr.reverse()) // array in reverse order

// const newArray = myArr.join() // it converts array to string

// console.log(myArr)
// console.log(typeof newArray)

// slice, splice { interview question: which method manipulate original array. ans splice manipulates original array, by removing range element i.e splice(1,3) it will remove 1 to 3 position elements}

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // return section of array (1, 3), does not remove any element from array 

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3) // removes the range element from original array

console.log("C ", myArr)
console.log(myn2)

