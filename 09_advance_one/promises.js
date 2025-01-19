const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task complete')
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('promise consumed')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 complete')
        resolve()
    }, 1000)

}).then(function(){
    console.log('Asynce 2 resolved')
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "vikas", email: "vikas@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({name: "vikas", email: "happy@gmail.com"})
        } else{
            reject("ERROR: something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.name
}).then(function(name){
    console.log(name)
}).catch(function(error){
    console.log(error)
}).finally(() => {console.log("The promise is either resolve or rejected")})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({name: "JavaScript", email: "happy@gmail.com"})
        } else{
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function ConsumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

ConsumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: ', error)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))