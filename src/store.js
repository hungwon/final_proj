import { configureStore, createSlice } from '@reduxjs/toolkit'
import df from "./data.json"


let game = createSlice({
    name: 'game',
    initialState: {
        idx: 0, // restaurant idx
        round: 1, // current round
        totalScore: 0, // total score
        score: 0, // score for current round
        levelScore: 0, // difficulty score for given restaurant (popularity * 10)
        numGuess: 0, // number of guesses
        guessScore: 0, // score for current guess
        correct: false, // condition for moving to next round
    },
    reducers: {
        newGame(state) {
            console.log("new game started");
            const min = 0
            const max = df.length - 1
            state.idx = parseInt(Math.floor(Math.random() * (max - min + 1)) + min)
            state.levelScore = parseInt(df[state.idx].popularity) * 10;
            state.round = 1;
            state.totalScore = 0;
            state.score = 0;
            state.numGuess = 0;
            state.guessScore = 0;
            state.correct = false;
        },
        newRound(state) {
            console.log("new round started");
            const min = 0
            const max = df.length - 1
            state.idx = parseInt(Math.floor(Math.random() * (max - min + 1)) + min)
            state.round += 1;
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
            state.guessScore = parseInt((100 - state.levelScore) / state.numGuess);


            let cond = df[state.idx].name === action.payload
            if (cond) {
                state.score += state.guessScore + state.levelScore;
            } else {
                state.score = 0;
            }

            state.totalScore += state.score;

            if (cond || state.numGuess >= 5) {
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