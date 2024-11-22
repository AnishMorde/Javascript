const TinderUser = {
    name :"anish",
    email : "anishmorde@gmail.com",
    age:20 ,
    fullName:{
        userFullName:{
            firstNme:"Anish",
            LastName:"Morde"
        }
    }
}

//access the nested object means object is inside the object
console.log(TinderUser.fullName.userFullName.LastName)


//combine the objects 

const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"c" , 4:"d"}

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3)


console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))