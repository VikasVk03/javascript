// Immediately Invoked Function Expresions (IIFE)

(function chai() {
    // named iife as named chai
    console.log(`DB CONNECTED`)
})();

// remember to put semicolon ; as after IIFE excuted it dont know where to stop, it tell that function is ended

// ()(); :- it is IIFE, first parenthesis jis me function ki definition likh ne wale hi, aur second parenthesis code ko excute krta hi

// why IIFE used? :- global scope ke pollution se problem hoti hi kai bar toh jobhi global scope ke variable, ya jobhi declaration hi uske pollution ko hatane keliye IIFE ka use kiya

(function aurcode(){
    // nameed iife as named aurcode()
    console.log(`BD CONNECTED TWO`)
})();

( (name) => {
    // normal iife or without name
    console.log(`DB CONNECTED THREE , ${name}`)
})("vikas"); 
