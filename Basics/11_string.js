const name = "Anish"
const repo = 50
console.log(name+repo + " Demo")

// string interpolation we can use the backticks ``

//mosly used string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repo}`)


const gameName = new String ("TempleRun")

console.log(gameName.__proto__)

console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())

console.log(gameName.length)
console.log(name.toLowerCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('R'))

//starting include but lst index is excluded means not included in the substring 
const newName = gameName.substring(0,4)
console.log(newName)

const myName = gameName.slice(-8,4)
console.log(myName)


const newSpaceString = "    Anish     "
console.log(newSpaceString)
console.log(newSpaceString.trim())

console.log(gameName.split('-'))
console.log(gameName.includes('Run'))