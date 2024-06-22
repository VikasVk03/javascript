// ***************** Numbers *************
const score =400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const anotherNumber = 232.23432
// console.log(anotherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN')); // it adds comma to number, by default () it does according to internation std, for indian std 'en-IN'

// ************ Maths ***********

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3)) // for rounding off
// console.log(Math.ceil(4.3)) // choose high value
// console.log(Math.floor(4.9)) // choose least value
// console.log(Math.min(2, 3, 5, 8, 9)) // minimum value
// console.log(Math.max(2, 3, 5, 8, 9)) // maximum value

console.log(Math.random()); // random output value range 0 to 1 in decimal
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1))) + min)
// (max - min) is use to decide range of random output