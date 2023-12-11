let randomNumber = Math.floor((Math.random() * 100 +1));
console.log(randomNumber); 

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [] //array for displaying previous guesses.
let numGuess = 1 // for counting total guesses.

let playgame = true 

if(playgame){
    submit.addEventListener('click' , (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

const validateGuess  = (guess) => {
    //check values.
    if(isNaN(guess)){
        alert('Please Enter a valid number')
    }
    else if(guess < 1){
        alert('Please Enter a valid number')
    }
    else if(guess > 100){
        alert('Please Enter a valid number')
    }

    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayguess(guess)
            displayMessage(`Game over.  Random Number was ${randomNumber}`)
            endGame()
        }
        else {
            displayguess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess) => {
    //message for checking if value is correct or not .
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame();
    }

    else if (guess < randomNumber){
        displayMessage(`Number is too low`)
    }
    else if (guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

const displayguess = (guess) => {
    //
    userInput.value = ''   ///cleaning up the form input value 
    guessSlot.innerHTML += `${guess} ,  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

const displayMessage = (message) => {
    // displaying ,  changes to DOM
    lowOrHi.innerHTML = `<h2> ${message}</h2>`
}

const endGame = () => {
 // 
 userInput.value = '';
 userInput.setAttribute('disabled' , '')
 p.classList.add('button')
 p.innerHTML = `<h2 id = "newGame"> Start New game </h2>`
 startOver.appendChild(p)
 playgame = false;
 newGame()
}

const newGame = () => {
newGamebtn = document.querySelector('#newGame')
newGamebtn.addEventListener('click' , (e) =>{
    randomNumber =  Math.floor((Math.random() * 100 +1))
    prevGuess = []
    numGuess = 1 
    guessSlot.innerHTML= ''
    remaining.innerHTML = `${11 -numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    
    
    playgame=true;

})
}

