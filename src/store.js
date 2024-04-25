import { configureStore, createSlice } from '@reduxjs/toolkit';
import df from "./data.json";
import seedrandom from 'seedrandom';


let game = createSlice({
    name: 'game',
    initialState: {
        idx: 0,                 // current restaurant idx
        restaurants: [],        // chosen restaurants for the game
        round: 1,               // current round
        totalRounds: 3,         // total number of rounds
        guesses: [],            // current guesses
        totalGuesses: 5,        // total number of guesses
        totalScore: 0,          // total score
        score: 0,               // score for current round
        levelScore: 0,          // difficulty score for given restaurant (popularity * 10)
        numGuess: 0,            // number of guesses
        guessScore: 0,          // score for current guess
        correct: false,         // condition for moving to next round
        currentMode: 'daily',   // current game mode (daily or practice)
    },
    reducers: {
        newGame(state, action) {
            const { mode } = action.payload;
            const min = 0;
            const max = df.length - 1;
            state.restaurants = [];
            state.currentMode = mode;

            if (mode === 'daily') {
                // Select restaurants using current day as seed
                console.log("new daily game started");

                const date = new Date();
                date.setHours(0, 0, 0, 0);
                var daterng = seedrandom(date);

                while (state.restaurants.length < state.totalRounds) {
                    const index = Math.floor((daterng() * (max - min + 1))) + min;
                    if (!state.restaurants.includes(index)) {
                        state.restaurants.push(index);
                    }
                }
            } else {
                // Randomly select restaurants
                console.log("new practice game started");

                while (state.restaurants.length < state.totalRounds) {
                    const index = Math.floor(Math.random() * (max - min + 1)) + min;
                    if (!state.restaurants.includes(index)) {
                        state.restaurants.push(index);
                    }
                }
            }

            state.idx = state.restaurants[0];
            state.levelScore = parseInt(df[state.idx].popularity) * 10;
            state.round = 1;
            state.guesses = [];
            state.totalScore = 0;
            state.score = 0;
            state.numGuess = 0;
            state.guessScore = 0;
            state.correct = false;
        },
        newRound(state) {
            console.log("new round started");
            state.idx = state.restaurants[state.round];
            state.round += 1;
            state.guesses = [];
            state.levelScore = parseInt(df[state.idx].popularity) * 10;
            state.score = 0;
            state.numGuess = 0;
            state.guessScore = 0;
            state.correct = false;
        },
        guess(state, action) {
            if (action.payload === "") {
                state.correct = false;
            }

            state.numGuess += 1;
            state.guesses.push(action.payload);
            state.guessScore = parseInt((100 - state.levelScore) / state.numGuess);


            let cond = df[state.idx].name === action.payload
            if (cond) {
                state.score += state.guessScore + state.levelScore;
            } else {
                state.score = 0;
            }

            state.totalScore += state.score;

            if (cond || state.numGuess >= state.totalGuesses) {
                // after state.correct changed, re render the page
                state.correct = true;

                console.log(`you select ${action.payload}, state.correct will be true - ${state.correct}`);
            } else {
                state.correct = false;
                console.log(`you select ${action.payload}, state.correct will be false - ${state.correct}`);
            }
        }
    }
})


export default configureStore({
    reducer: {
        game: game.reducer,
    }
})

export let { newGame, newRound, guess } = game.actions