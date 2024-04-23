import df from './data.json'

/* Todo: 
    - I uploaded pdf file to main github repo. Please check the pdf file for more details.
    - Create test cases for functions in game.j These are just suggestions. Plase check the functions in game.js and write test cases accordingly.
    - These functions are just a starting point. You can add more functions as needed. 
*/

function randomIndex() {
    const min = 0
    const max = df.length - 1
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function newGame() {
    const restaurantIndex = randomIndex();
    const restaurant = df[restaurantIndex];
    const levelScore = parseInt(restaurant.popularity) * 10;

    localStorage.setItem('restaurantIndex', restaurantIndex); // randomIndex
    localStorage.setItem('round', 1);
    localStorage.setItem('records', []); // list of lists [[round, restaurant, numGuess, score], ...]
    localStorage.setItem('totalScore', 0); // total score

    localStorage.setItem('score', 0); // score for current round
    localStorage.setItem('levelScore', levelScore); // difficulty score for given restaurant (popularity * 10)
    localStorage.setItem('numGuess', 0); // number of guesses
    localStorage.setItem('guessScore', 0);
    localStorage.setItem('prevGuess', []); // list of previous guesses( = list of restaurant.name)

    return df[randomIndex];
}

export function newRound() {
    const restaurantIndex = randomIndex();
    const restaurant = df[restaurantIndex];
    const levelScore = parseInt(restaurant.popularity) * 10;
    const round = localStorage.getItem('round') + 1;
    const records = localStorage.getItem('records');
    const totalScore = localStorage.getItem('totalScore');

    localStorage.setItem('restaurantIndex', randomIndex);
    localStorage.setItem('round', round);
    localStorage.setItem('records', records);
    localStorage.setItem('totalScore', totalScore);

    localStorage.setItem('score', 0);
    localStorage.setItem('levelScore', levelScore);
    localStorage.setItem('numGuess', 0);
    localStorage.setItem('guessScore', 0);
    localStorage.setItem('prevGuess', []);

    return df[randomIndex];
}

export function incrementNumGuess() {
    let numGuess = localStorage.getItem('numGuess');
    numGuess += 1;
    localStorage.setItem('numGuess', numGuess);
}

export function getPrevGuess() {
    return localStorage.getItem('prevGuess');
}

export function addPrevGuess(input) {
    let prevGuess = getPrevGuess();
    prevGuess.append(input);
    localStorage.setItem('prevGuess', prevGuess);
}

export function updateGuessScore() {
    let numGuess = localStorage.getItem('numGuess');
    let score = getLvScore();
    let guessScore = parseInt((100 - score) / numGuess)
    localStorage.setItem('guessScore', guessScore);
}

export function getLvScore() {
    return localStorage.getItem('levelScore');
}

export function getGuessScore() {
    return localStorage.getItem('guessScore');
}

export function updateScore(input) {
    let restaurantIndex = localStorage.getItem('restaurantIndex');
    let restaurant = df[restaurantIndex].name;
    var score;
    if (input === restaurant) {
        score = getLvScore() + getGuessScore();
    } else {
        score = 0;
    }
    localStorage.setItem('score', score);
}

export function getScore() {
    return localStorage.getItem('score');
}

export function getTotalScore() {
    return localStorage.getItem('totalScore');
}

export function updateTotalScore() {
    let totalScore = getTotalScore();
    totalScore += getScore();
    localStorage.setItem('totalScore', totalScore);
}

export function getRecords() {
    return localStorage.getItem('records');
}

export function getRound() {
    return localStorage.getItem('round');
}

export function getRestaurant() {
    const restaurantIndex = localStorage.getItem('restaurantIndex');
    return df[restaurantIndex];
}

export function getNumGuess() {
    return localStorage.getItem('numGuess');
}

export function saveRecords() {
    let records = getRecords();
    let round = getRound();
    let restaurant = getRestaurant();
    let numGuess = getNumGuess();
    let score = getScore();
    records.append([round, restaurant, numGuess, score]);
    localStorage.setItem('records', records);
}

export function guess(input) {
    // update number of guesses
    incrementNumGuess();

    // add current guess to  previous guesses lst
    addPrevGuess(input);

    // update guess score
    updateGuessScore();

    // update current score
    updateScore(input);

    // update total score
    updateTotalScore();
    let numGuess = getNumGuess();
    let correct = false;
    // save records
    if (input === getRestaurant().name || numGuess === 5) {
        saveRecords();
        correct = true;
    }

    // condition for next round if it is true then we will navigate to result page or score page
    const condition = (numGuess <= 4 && correct);
    return condition;
}

