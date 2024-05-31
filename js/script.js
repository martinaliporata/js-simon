const cardsNo= 7;
const timerSeconds = 6;

startNewMemoryGame(cardsNo, timerSeconds)

function startNewMemoryGame(numberOfCards, timer) {
    const containerElement = document.querySelector('section#output')
    
    const numbersToShow = []
    for (let index = 0; index < numberOfCards; index++){
        numbersToShow.push(getUniqueRandomInt(numbersToShow, 0, 100))
    }
    renderNumbers(containerElement, numbersToShow)

    setTimeout(function(){
        containerElement.replaceChildren('')

        let guessedNumbers= []

        setTimeout(function() {
            guessedNumbers = retrieveGuesses(numbersToShow.length)
            console.log(numbersToShow, guessedNumbers)   
            renderNumbers(containerElement, numbersToShow)
            console.log(getCorrectAnswers(numbersToShow, guessedNumbers))
            renderNumbers(containerElement, getCorrectAnswers(numbersToShow, guessedNumbers))     
        }, 0);

        console.log(guessedNumbers)
    }, timer * 1000)
}

const generatedNumbers = ''

function renderNumbers(containerEl, generatedNumbers){
    for (let index= 0; index<generatedNumbers.length; index++){
        const newSquareEl = document.createElement('article')
        newSquareEl.append(generatedNumbers[index])
        containerEl.appendChild(newSquareEl)
    }
}

function retrieveGuesses(numberOfGuesses){
    const guessedNumbers = []
    for (let index= 0; index <numberOfGuesses; index++) {
        guessedNumbers.push(Number.parseInt(prompt('Guess a number'), 10))
    }
    return guessedNumbers
}

function getCorrectAnswers(numbers, guesses) {
    const answers = []
    for (let index = 0; index < numbers.length; index++) {
        answers.push(guesses.includes(numbers[index]))
    }
    return answers;
}

function getRandomInt(min,max){
    return Math.floor(Math.random()*((max + 1) - min)) + min
}

function getUniqueRandomInt (uninvitedNumbers, min, max){

    let randomNumbers
    let isFound = false

    while(!isFound){
        randomNumber = getRandomInt(min,max)           
            if(uninvitedNumbers.includes(randomNumber) === false){
                isFound = true
            }
    }
    return randomNumber
}