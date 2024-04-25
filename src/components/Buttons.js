import React from "react";
import "../styleguide.css";
import "./Btn.css";
import data from "../data.json";
//import { newGame, guess } from "../game";
import { useDispatch, useSelector } from 'react-redux';

import { newGame, newRound, guess } from "../store.js";


export const DailyBtn = () => {
    let state = useSelector(state => state);
    let dispatch = useDispatch();

    const handleClick = () => {
        console.log("Daily button clicked");
        dispatch(newGame({ mode: 'daily' }));
    }

    return (
        <>
            <button className="daily_btn start_btn" onClick={handleClick}>Daily</button>
        </>
    )
}

export const AgainBtn = () => {
    //console.log("Again button clicked");
    return (
        <>
            <button className="again_btn">Play Again</button>
        </>
    )
}

export const NextBtn = () => {
    let dispatch = useDispatch();
    let clickHandler = (e) => {
        console.log("next button clicked");
        // after state.correct changed, re render the page
        dispatch(newRound());
    }
    return (
        <>
            <button className="next_btn" onClick={clickHandler}>Next</button>
        </>
    )
}

export const ResultsBtn = () => {
    return (
        <>
            <button className="next_btn">Results</button>
        </>
    )
}

export const HomeBtn = () => {
    //console.log("Home button clicked");
    return (
        <>
            <button className="again_btn">Home</button>
        </>
    )
}

export const PracticeBtn = () => {
    let state = useSelector(state => state);
    let dispatch = useDispatch();

    const handleClick = () => {
        console.log("Practice button clicked");
        dispatch(newGame({ mode: 'practice' }));
    }

    return (
        <>
            <button className="practice_btn start_btn" onClick={handleClick}>Practice</button>
        </>
    )
}

export const GuessBtn = () => {
    let state = useSelector(state => state);
    let dispatch = useDispatch();



    let selectHandler = (e) => {
        console.log("Guess button clicked");
        // after state.correct changed, re render the page
        dispatch(guess(e.target.value));
    }

    return (
        <>
            <select className="guess_btn" onChange={selectHandler} >
                <option value="">--Please choose an option--</option>
                {
                    data.map((item, index) => (
                        <option value={item.name} key={index}>{item.name}</option>
                    ))
                }
            </select>
        </>
    )
}
