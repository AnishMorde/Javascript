const score  = 100.23234333

const balance = new Number(200.343445)
console.log(balance)
console.log( typeof balance.toString())
console.log(balance.toFixed(3))

const hundreds = 100000000

console.log(hundreds.toLocaleString('en-IN'))


//+++++++++++++++++++++++MATH+++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.round(4.5)) //5
console.log(Math.abs(-232)) //232
console.log(Math.ceil(3.3)) //4
console.log(Math.floor(2.3)) //2

console.log(Math.floor(Math.random()*10+1))


 let x = 1
 let y=2

 console.log(x++ + ++y)