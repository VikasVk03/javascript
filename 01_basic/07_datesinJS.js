// dates

const myDates = new Date()
//console.log(myDates) // output  2024-06-22T13:18:56.347Z

//console.log(myDates.toString()) // output  Sat Jun 22 2024 13:20:57 GMT+0000 (Coordinated Universal Time)
//console.log(myDates.toLocaleDateString()) // 6/22/2024

// console.log(myDates.toLocaleString()) // 6/22/2024, 1:26:45 PM

// console.log(myDates.toUTCString()) // Sat, 22 Jun 2024 13:29:57 GMT

// To create specific date

//const myCreatedDate = new Date(2024, 11, 12) // Date(year, month[0{jan} to 11{dec}], date)

//const myCreatedDate = new Date(2024, 11, 12, 11, 13) // Date{year, month[same formate], date, hour[in 24hr], minutes[0 to 60]}

//const myCreatedDate = new Date("2024-01-15") // formate in yy/mm/dd

const myCreatedDate = new Date("04-14-2024") // formate in mm/dd/yy use in india


//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // time in milli seconds
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // time secs

let newDate = new Date()
// console.log(newDate)
// console.log(Math.floor(newDate.getMonth()) + 1)
// console.log(newDate.getFullYear())

// `${newDate.getDate()} and time is `

newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate)