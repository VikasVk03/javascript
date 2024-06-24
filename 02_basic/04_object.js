// const Tinder = new Object() // single ton object

const Tinder = { // non singleton object  
    }
Tinder.Id = "124abc"
Tinder.name = "vk94"
Tinder.IsLoggedIn = false

// console.log(Tinder)


// nested Object

const regularUser = {
    fullName: {
        userFullName: {
            FirstName: "vikas",
            LastName: "vishwakarma",
        }
    }
}

// console.log(regularUser.fullName.userFullName.FirstName)

// merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2,obj4) // {} is optional to write but usefull, if we not include {}, then all objects are merge in obj1 or in first value, this create new object obj1 that include all other objects, if we do not want to add this in obj1 then include {}, it will add all obj in new object {}  

const obj3 = {...obj1, ...obj2, ...obj4} // spread operator to merge objects

// console.log(obj3)
// from data base we get information in array of object.

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
]

// console.log(users[1].email)
////////////////////////////////////////////////////////////
// console.log(Tinder)

// console.log(Object.keys(Tinder))
// console.log(Object.values(Tinder))
// console.log(Object.entries(Tinder))

console.log(Tinder.hasOwnProperty("vikas")) // to know ( value ) is present or not