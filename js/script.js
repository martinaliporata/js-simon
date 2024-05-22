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
})