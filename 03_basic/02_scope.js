// var c = 300 // outside {} has global scope

let a = 500
// {} defines scope
if (true) { // code written in {} has block scope
    let a = 10
    const b = 20
    var c = 30 
}

