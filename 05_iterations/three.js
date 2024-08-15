// Array specific loop jo loop array is jada use kiya jata hi
// ["", "", ""] empty string array
// [{}, {}, {}] empty object array
// for of syntax
//for (const element of object) { element/iterator of means jis object lo iterate or repeat krna hi, hum string bhi use krtehi, const ke element hi usko hum koi aur bhi nam de sakte hi, here object means jis cheese ke upar loop lagna hi. 
// }

const arr = [2, 4, 5, 6, 8]
for (const num of arr) { // ye loop apne app pata laga lega kab usko end hona hi, uski size kya hi, is me sirf variable declare kriye aur loop kis per lagana hi baki loop kr dega
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) { // prints single words till end
    //console.log(`Each character is ${greet}`);
}
for (const greet of greetings) { // prints whole string jitna word count hi yaha 12 characters hi including space toh 12 time print krta hi.
   // console.log(`Each character is ${greetings}`);
}

// Map it can have only unique value and follows sequence
const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("FR", "FRANCE")
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) { // [key, value] ye array ka destructure hojata hi.
    // console.log(key, "->", value);
}

const myObject = {
    "game1": "Cod",
    "game2": "GTA5",
    "game3": "RE7"
}
// output:- TypeError: myObject is not iterable means in this way we can not iterate object.
for (const [key, value] of myObject) {
    console.log(key, ":-", value)
}