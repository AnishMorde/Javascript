//  const intervalId =setInterval(() => {
//     console.log("Anish MOrde " + Date.now())
// }, 1000);

// clearInterval(intervalId)

console.log();

const start = document.getElementById("start");
const stop = document.getElementById("stop");
let time = document.getElementById("time");

// console.log(stop)

let intervalId;
start.addEventListener("click", () => {
  const sayDate = function () {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();
    console.log("Date Now :" + Date.now());
  };
  intervalId = setInterval(sayDate, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(intervalId);
});


