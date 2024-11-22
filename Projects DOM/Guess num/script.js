let randomNum = Math.floor(Math.random()*100+1)
const submit = document.querySelector('#subt')
console.log(randomNum)
const userInput = document.querySelector('#guessField')
const guesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.lastResult')

const p = document.createElement('p')

let prevGuess =[];
let numGuess = 1;

let playGame = true
if(playGame){
    submit.addEventListener( 'click',(e)=>{
        e.preventDefault();
      const guess =  parseInt(userInput.value)
      console.log(guess)
      valiadateGuess(guess)
    })
}


function valiadateGuess (guess){
   if(isNaN(guess)){
    alert('please enter a valid number')
   }else if (guess < 1){
    alert('please enter a valid number more than 1')
   }else if (guess > 100){
    alert('please enter a less than 100 ')
   }else{
         prevGuess.push(guess);
         if(numGuess === 11){
            displayGuess(guess)
            displayMsg(`Game Over Random number was ${randomNum}`)
            endGame()
         }else{
            displayGuess(guess)
            checkGuess(guess)
         }
   }

}

function checkGuess(guess){
     if(guess===randomNum){
        displayMsg(`You guessed Right`)
        endGame()
     }else if(guess < randomNum){
        displayMsg(`Number is too Low `)
     }else if(guess > randomNum){
        displayMsg(`Number is too High `)
     }
}

function displayGuess(guess){
       userInput.value =''
       guesSlot.innerHTML +=`${guess} ,  `
    //    guesSlot.innerHTML = prevGuess
       numGuess++;
       remaining.innerHTML = `${ 11 - numGuess}`
}

function displayMsg(message){

    lowOrHigh.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML =`<h2 id ="newGame">Star new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
    
}


function newGame(){
  const newGameButton =  document.querySelector("#newGame")
   newGameButton.addEventListener('click' , (e)=>{
    randomNum = Math.floor(Math.random()*100+1)
    prevGuess = [];
    numGuess = 1;
    guesSlot.innerHTML = ""
    remaining.innerHTML = `${ 11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
   })
    

}


