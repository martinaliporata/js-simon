const userChoice = document.getElementById('usernumbers');
const button = document.getElementById('button');

button.addEventListener ('click', function() {
    // Step 1: Generare e visualizzare 5 numeri casuali
    const randomNumbers = generateRandomNumbers(5, 1, 100);
    displayNumbers(randomNumbers);
})