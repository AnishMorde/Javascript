function user (username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this
    this.greeting= function(){
        console.log(`welcome ${this.username}`)
    }

}


//constructor function 
// the new is create the new instance for the every function call and it having the diff val
//when we does not the use the new keyword the in the second call of the function the first function call is get overide
//new constructor function is called when used new keyword
const user1 = new  user("anish",3,true)
const user2 =  new user("hitesh",6,false)

// console.log(user1.constructor)
console.log(user2)

console.log( user1 instanceof user)