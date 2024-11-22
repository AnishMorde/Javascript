// const isLoggedIn = true;
// if(isLoggedIn){
//     console.log("user is log in")


// <,>,<=,>=,==,!=,===,!==

// const balance = 1000
// if(balance>100){
//     console.log("balace is more htan 100");
// }


const month = 3;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;

        default:
            console.log("invalid");
            break;
}

// falsy values  

// false, 0. -0,BigInt 0n , "", null undefined , NṇaN

//Truthy values

// "0",'false'," ",[],{},function(){}

//nullsh coelcing operator (??): null undefined

let val1;
val1=5 ?? 10;
val1 = null ?? 100;
console.log(val1)

// ternary operaotr 

const teatPrice =100

teatPrice < 80 ? console.log(true) : console.log(false) ;

