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
    console.log("new game started");
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

    // print every value in local storage
    console.log("local storage values:");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);
    }

    return df[randomIndex];
}

export function newRound() {
    const restaurantIndex = randomIndex();
    const restaurant = df[restaurantIndex];
    const levelScore = parseInt(restaurant.popularity) * 10;
    const round = parseInt(localStorage.getItem('round')) + 1;
    const records = localStorage.getItem('records');
    const totalScore = parseInt(localStorage.getItem('totalScore'));

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
    let numGuess = parseInt(localStorage.getItem('numGuess'));
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
    console.log(`guessScore: ${guessScore}`);
    localStorage.setItem('guessScore', guessScore);
}

export function getLvScore() {
    return parseInt(localStorage.getItem('levelScore'));
}

export function getGuessScore() {
    return parseInt(localStorage.getItem('guessScore'));
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
    return parseInt(localStorage.getItem('score'));
}

export function getTotalScore() {
    return parseInt(localStorage.getItem('totalScore'));
}

export function updateTotalScore() {
    let totalScore = getTotalScore();
    let score = getScore();
    totalScore += score;
    console.log(`totalScore changed from ${totalScore - score} to ${totalScore}`);
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
    if (input === "") {
        console.log("Please select a restaurant");
        return false;
    }
    // update number of guesses
    incrementNumGuess();

    // add current guess to  previous guesses lst
    //addPrevGuess(input);

    // update guess score
    updateGuessScore();

    // update current score
    updateScore(input);

    // update total score
    updateTotalScore();
    let numGuess = getNumGuess();

    // save records
    if (input === getRestaurant().name || numGuess >= 5) {
        //saveRecords();
        console.log(`you select ${input}, move to next round`);
        return true;
    } else {
        console.log(`wrong guess`);
        return false;
    }
}

