function one (){
    const username ="Anish"
    function two(){
     const website ="youtube"
     console.log(username)
    }

    two()
}

one()


//hoisting we cannot access the function before the declaration 
const addTwo = function(num1){
     return num1+10;
}

console.log(addTwo(10))