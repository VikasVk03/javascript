// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const accountId = 144553
let accountEmail = "vikas@goole.come"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountId = "12422" / not allowed

accountEmail = "vk@vk.com"
accountPassword = "1242144"
accountCity = "mumbai"

/*
    Prefer not to use var
    Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);