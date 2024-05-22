const userChoice = document.getElementById('usernumbers');
const button = document.getElementById('button');

button.addEventListener ('click', function() {
    // Step 1: Generare e visualizzare 5 numeri casuali
    function getRandomInt(min,max) {
        const randomNumbers = Math.floor(Math.random() * (max - min +1) + min);
        return randomNumbers;
    }
    showedNumbers(randomNumbers);

    if (userChoice > 10 || Number.isNaN(userChoice)){
        userChoice = 3;
    }

    const timer = setInterval (function(){
        userChoice--;
        if (userChoice < 0)
            clearInterval(timer);
            alert('Now choose');
    }, 30000)

    const hiddenNumber = setTimeout(function(){
        userChoice.classList.add("display")
    }, 30000)

    for (let index = 0; index <5; index++) {
        const userPrompt = Number.parseInt(prompt('Scrivi i numeri che hai appena visto'))
    }
})