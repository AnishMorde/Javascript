//immediately invoked function expressions(IIFE)

//()()
//to avoid the global scope pollution  the iife is used 
//and alos invoked immediately
//semicolon is required

(function chai(){
    console.log(`DB CONNECTED`)
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("Anish");