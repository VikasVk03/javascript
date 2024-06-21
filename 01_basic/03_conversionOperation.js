//let score = 33 // it is number
let score = "33" // in double quotes it is string 

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)



//data conversion
// "33" => 33
// "33abc" => NaN (not a number)
// true => 1 ; false => 0


//boolean
let IsLoggedIn = 1
let booleanIsLoggedIn = Boolean(IsLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "vikas" => true

let someNumber = 33
let stringNumber = String(someNumber)

//console.log(stringNumber)
//console.log(typeof stringNumber)

//***************** Operations *******************/
let value = 3 
let negValue = -value
//console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2) // 2 topower 2
// console.log(2%2)
// console.log(2/2)

let str1 = "hello"
let str2 = " vikas"
let str3 = str1 + str2
//console.log(str3)

// console.log(1 + 2);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2" + 3 + 2);
// console.log( 3 + 3 * 5 % 6); // it is not good to write and not accepted in industries, code should be easy to read and not to create any confusions // it is only asked in exam.


// console.log(+true);
// console.log(+"");

let num1, nem2, num3
num1 = num2 = num3 = 2 + 2; // this is not good practice, if value is 4, donot make it 2 + 2


let gameCounter = 100
++gameCounter;
gameCounter++;

console.log(gameCounter);