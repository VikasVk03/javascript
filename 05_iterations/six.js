// const coding = ["java", "python", "c", "cpp", "javascript"]

// // understand return type of forEach loop kuch return krta hi ya nhi 
// const value = coding.forEach((item)=>{
//     //console.log(item)
//     return item
// })
// console.log(value)

// filter 
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// num.filter( (num) => num > 4 )

// jab humne parenthesis laga rhe the tab ov khud return ho rha tha lekin jab curly braces {} lagadiya yani scope open kiya tab hume return key word likh na hota hi.        
// const newNum = num.filter( (num) =>{ 
//     return num > 4
// })

// we will do above same thing using if condition

const newNum = []

// num.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num) // push insert num value in newNum
//     }
// })

// console.log(newNum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk)=> bk.genre === 'History')
userBooks = books.filter((bk)=>{ return bk.publish >= 1995})

userBooks = books.filter((bk)=>{ 
    return bk.publish >= 1995 && bk.genre === 'History'
})


console.log(userBooks)