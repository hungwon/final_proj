import React from "react";
import "./styleguide.css";
import "./Btn.css";
import data from "./data.json";
import { newGame, guess } from "./game";
import { useNavigate } from 'react-router-dom';


export const DailyBtn = () => {
    const handleClick = () => {
        console.log("Daily button clicked 1");
        newGame();
    }
    console.log("Daily button clicked");
    return (
        <>
            <button className="daily_btn start_btn" onClick={handleClick}>Daily</button>
        </>
    )
}

export const AgainBtn = () => {
    console.log("Again button clicked");
    return (
        <>
            <button className="again_btn">Play Again</button>
        </>
    )
}

export const NextBtn = () => {
    console.log("Next button clicked");
    return (
        <>
            <button className="next_btn">Next</button>
        </>
    )
}

export const HomeBtn = () => {
    console.log("Home button clicked");
    return (
        <>
            <button className="again_btn">Home</button>
        </>
    )
}

export const PracticeBtn = () => {
    console.log("Practice button clicked");
    return (
        <>
            <button className="practice_btn start_btn">Practice</button>
        </>
    )
}

export const GuessBtn = () => {
    const navigate = useNavigate();
    console.log("Guess button clicked");

    let selectHandler = (e) => {
        if (guess(e.target.value)) {
            navigate('../score');
        }
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
