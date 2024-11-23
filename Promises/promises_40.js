const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promised consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2nd Promise");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 is resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "chai", email: "chai@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "anish", password: "123" });
    } else {
      reject("ERROR something is went wrong");
    }
  }, 1000);
});

const username = promiseFour
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });


  const promFive = new Promise((resolve,reject)=>{
    setTimeout(function () {
        let error = true;
        if (!error) {
          resolve({ username: "javaScript", password: "123" });
        } else {
          reject("Js is went wrong");
        }
      }, 1000);
  })

  async function consumeFive() {
    try {
        const response = await promFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    
  }

  consumeFive()

//   async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data)
//     } catch (error) {
//         console.log("error in user fetch")
//     }
//   }

//   getAllUser()

  fetch('https://api.github.com/users/anishmorde')
  .then((response)=>{
      return response.json();
  }).then((data)=>{
    console.log(data)
  }).catch((error)=>{
    console.log(error)
  })