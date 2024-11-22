//singleton 
//Object.create

//object literals

//use symbol in thee objects 

const mySym = Symbol("Key1")

const user ={
    //key : value
    name : "Anish" ,
    //use symbol in thee objects 
    [mySym] : "myKey1",
    username : "anishmorde" ,
    mailId : "anishmorde@gmail.com",
    age : 20 ,
    isLoggedIn : false 


}


//access the objeects value
console.log(user.age)
console.log(user["mailId"])




//freeze the object 

// Object.freeze(user)

user.name = "hitesh"
console.log(user)

user.greeting = function(){
    console.log("hello js user");
}

user.greeting2 = function(){
    console.log(`hello js user , ${user.name}`);
}

console.log(user.greeting())
console.log(user.greeting2())


