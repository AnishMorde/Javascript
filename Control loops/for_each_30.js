// const coding =["js","ruby","java","python","cpp"]
// const val = coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })

// console.log(val) 
//+================ filter ==================
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const nums = myNums.filter( (num)=>{
//     return num>5
// })

// console.log(nums)
// const newNums =[];
// const nums = myNums.forEach( (num)=>{
//     if(num>5){
//         newNums.push(num);
//     }
// })

// console.log(newNums)

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        year: 1925
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        year: 1951
    }
];

// const filterBooks = books.filter((bk)=>{
//     return bk.genre ==="Classic" || bk.year >= 1950
// })

// console.log(filterBooks)

const numsArr = [1,2,3,4,5,6,7,8,9,10]

const newArr = numsArr
           .map( (num)=> num*10)
           .map( (num)=> num+20)
           .filter( (num)=> num>=67)

  console.log(newArr)   

  let  myTotal = numsArr.reduce(function(acc,curval){
    // console.log(` acc${acc} and curval ${ curval}`)
    return acc+curval;
  },0)

//   myTotal = numsArr.reduce( (acc,curval)=>(acc+curval),0)
// console.log(myTotal)

