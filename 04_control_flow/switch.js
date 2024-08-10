// switch syntax
// switch (key) { key jo har bar check krni hi
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 13 // value datatype  can be number, strings ect.

switch (month) {
    case 1:
        console.log("January")
        break;
        // after the case is match, if break is not written then after match case all the code is excuted except the default case. in occur javascript but not in swift language.
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;

    default:
        console.log("put month between 1 to 12")
        break;
}