// foreach loop
// array.forEach(element => { 
// });

const coding = ["java", "python", "c", "cpp", "javascript"]
coding.forEach( function (val) { // how we write function, function name(parameter) {}, but here we write callbackfn(iska nam nhi hota kyu ki ye callback function hi), we donot name of funtion, function () {}. for each loop is smart that it will (kyu ki ye function array ke andar chal rha hi to ye apne app value ko parameter ke tarah andar leke ayega function me) traverse each element by it self for array. we can name anything in parameter, we name it val.
    // console.log(val); 
} )

// using arrow function, syntax functionname() => {} 
coding.forEach( (item) => {
    //console.log(item)
});

// function printMe(item){
//     console.log(item);
// }

// coding.forEach( printMe )

// here function have access to value of array, index and whole array
coding.forEach( (item, index, arr) =>{
   // console.log(item, index, arr);
} )

// understand how to get access to object value stored in array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})