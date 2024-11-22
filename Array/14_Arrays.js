// let myArr = [12244,245,5,45,]

// let newArr = new Array(8,9,10)

// console.log(myArr[3])
// console.log(newArr[2])

// newArr.push(199) // at last
// newArr.push(200)
// newArr.pop() //at last

// newArr.unshift(100) 
// newArr.shift()//push at start
// console.log(newArr)

// console.log(newArr.includes(10))

//  newArr = myArr.join()

//  console.log(myArr)
//  console.log( typeof newArr)

 //slice we can get the copy of the section from the array
 //splice manipulate the array

//  console.log(myArr.sort())
//  console.log(myArr)

const marvel_heros = ["thor","ironMan","Hulk","CaptianAmerica"]
const dc_heros = ["batMan","superMan","flash"]

// console.log(marvel_heros.push(dc_heros))
// console.log(marvel_heros[4][0])

// let AllHeros = marvel_heros.concat(dc_heros)
// console.log(AllHeros)

//spread operation 

const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros)

const num_arr = [1,2,3,[4,5,6],6,8,[10,11,12,[33,44,55]]]
const real_arr = num_arr.flat(Infinity)
console.log(real_arr)

console.log(Array.from("ANISH"))

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))