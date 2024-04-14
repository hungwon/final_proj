import React from "react";
import "./Styleguide.css";
import "./Btn.css";

export const DailyBtn = () => {
    console.log("Daily button clicked");
    return (
        <>
            <button className="daily_btn">Daily</button>
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
            <button className="practice_btn">Practice</button>
        </>
    )
}

export const GuessBtn = () => {
    console.log("Guess button clicked");
    return (
        <>
            <button className="guess_btn">Guess the Restaurant</button>
        </>
    )
}
