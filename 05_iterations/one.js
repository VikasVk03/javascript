// for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(index);
// }

// for (let i = 0; i < 10; i++) { // i ka scope ye for loop tak hi hai hum age i use kr sakte hi, per nested loop me i use nhi kr sakte declare ke bad.
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number")
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outter loop value: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         const element = j;
//         console.log(`inner loop value ${j} and inner loop value ${i}`)
//     }
   
// }

// table from 0 to 10
// for (let i = 0; i <= 10; i++) {
//     console.log(`outter loop value: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         const element = j;
//         console.log( i + '*' + j + '=' + i*j);
//     }
// }

// for loop on array
// let myArray = ["flash", "batman", "supperman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${index}`);
}