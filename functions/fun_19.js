// function definition 

function userNamePrint(){
     console.log("A")
     console.log("N")
     console.log("I")
     console.log("S")
     console.log("H")

}

//CALL THE FUNCTION
// userNamePrint()

function addNum(num1,num2){
    return num1+num2
    
}

// console.log(addNum(10,45))


function userLoggedIn(username="sam"){
    return `${username} just logged In `
}
// console.log(userLoggedIn("Anish"))

//rest operator

function calculateCart(...num1){
     return num1
}

// console.log(calculateCart(100,300,400,449))

const user ={
    name:"Anish",
    price:100
}

//handle the object in the function
function handleObj(anyObj){
    console.log(`${anyObj.name} is username and price is ${anyObj.price}`)
}

handleObj(user)

//handle the array in the function

const arr = [10,30,40,50,60]

function handleArray(myArr){
    return myArr[3];
}

console.log(handleArray(arr))
