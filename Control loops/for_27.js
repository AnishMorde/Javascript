
const arr = [10,20,30,40,50]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
    
// }

//break is break the loop 
//continue is skip that iteration where we used the continue in that condition
 
//+++++++++++++ for of loop +++++++++++++++++++++++++++++++++++

// for (const val of arr) {

//     console.log(val)
    
// }

// const greet = "Hello Hitesh"

// for (const i of greet) {

//     console.log(i)
    
// }

//++++++++++ Map +++++++++++++++++++++++++++++

const map = new Map()

// console.log(map.size)

map.set('IN',"INDIA")
map.set('USA',"UNITED STATE AMAERACA")
map.set('AUS',"AUSTRALIA")

console.log( map )

// for (const i of map) {
//     console.log( i )
// }


for (const [key,value] of map) {
    // console.log( key+":-"+value )
}

//+++++++ for in loop ++++++++++++++

const myObj = {
    js : "javascript",
    java: "java",
    cpp : "c++",
    rb : "ruby"
}

for (const key in myObj) { 
    // console.log(key) 
    // console.log(myObj[key])
}

for (const key in arr) {
//    console.log(arr[key])
//    console.log(key)

}

//++++++++++ for each loop ++++++++++++++++++++


const myArr =[78,89,90,23,45,67]

// call back function have no name 

myArr.forEach( function (val) {
    console.log(val)
})