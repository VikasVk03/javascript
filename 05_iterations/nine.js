// reduce function
const myNum = [1, 2, 3]

// it can be use to sum all prices in shoping cart
// const myTotal = myNum.reduce(function(acc, currval) {
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce((acc, curr)=> acc+curr, 0)

// console.log(myTotal) 

const shopingCart = [
    {
        courseName: "js course",
        price: 2999
    },
    {
        courseName: "java course",
        price: 6999
    },
    {
        courseName: "py course",
        price: 999
    },
    {
        courseName: "web dev course",
        price: 9999
    },
]

const priceTopay = shopingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceTopay)