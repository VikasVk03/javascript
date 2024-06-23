// Arrays

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1]) // to acces marged array element in array

// const allHeros = marvel_heros.concat(dc_heros) // joins two arrays
// console.log(allHeros)

const allNewheros = [...marvel_heros, ...dc_heros] // ... -spread operator it breaks both arrays spreads all element, it does work same as concatenate operator, we can add more than 2 arrays
// console.log(allNewheros)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [6, 5, 6]]]

const real_anotherArray = anotherArray.flat(3) // flat() - The maximum recursion depth Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. in () put depth i.e no. of levels in array .. kite time bad last array milega or we can put infinity, it will automatically calculate depth

// console.log(real_anotherArray)

// console.log(Array.isArray("vikasvk")) // to ask given is array or not

// console.log(Array.from("vikasvk")) // convert string/object to array 

console.log(Array.from({name: "vikasvk"})) // interesting

//  convert many elements to array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //A set of elements to include in the new array object. Returns a new array from a set of elements.

