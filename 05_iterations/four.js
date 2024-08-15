// for in loop
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift"
}

for (const key in myObject) {
//   console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "ruby", "py", "java", "cpp"]
// key of array are their index from 0 
for (const key in programming) {
//   console.log(key); // print index of array
}

for (const key in programming) {
//    console.log(programming[key]);
}

const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("FR", "FRANCE")

for (const key in map) {
    console.log(key); // print nothing as map is not iteratable
}