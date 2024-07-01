// var c = 300 // outside {} has global scope

let a = 500
// {} defines scope
if (true) { // code written in {} has block scope
    let a = 10
    const b = 20
    var c = 30 
}




function one(){
   const username = "vikas"

   function two(){
    const website = "youtube"
    console.log(username);
   }

   // console.log(website);

   // two()

}

// one()

if (true) {
    const username = "vikas"
    if (username === "vikas") {
        const website = " youtube"
        // console.log(username + website); 
    }
    // console.log(website)    
}

// console.log(username) 

function addOne(num){
    return num + 1
}

addOne(5)

const addTwo =  function (num) {
    return num + 2
}

console.log(addTwo(5))