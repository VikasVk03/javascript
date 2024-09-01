// understand map

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumers.map((nums)=> (nums + 10)) 
// const newNum = myNumers.map((nums)=> {return nums + 10})// if we open scope and not write return then it will print undefined in array
// console.log(newNum)

// understand chaining - map ke bad ek aur bar map likh sakte hi ya fir map ke bad filter bhi likh sakte hi

const newNum = myNumers
                    .map((num) => num *10 ) // ye operation perform hone ke bad new array ban ta hi aur uske bad age ke operation me chala jata hi ... bas itna hi ki sare operation perform hone ke bad hi newNum me value store hoti hi 
                    .map((numb) => numb + 2)
                    .filter((number) => number >= 40)

                    
console.log(newNum)