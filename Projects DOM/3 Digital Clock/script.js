const clock = document.querySelector("#clock")
const day = document.querySelector("#day")

setInterval(() => {
  let date  = new Date();
clock.innerHTML = date.toLocaleTimeString()
day.innerHTML = date.toLocaleDateString()

}, 1000);