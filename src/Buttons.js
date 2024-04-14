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

export const Dropdown = () => {
    return (
        <>
            <select className="dropdown">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </>
    )
}

export const GuessBtn = () => {
    let handleClick = () => {
        console.log("Guess button clicked");
    }

    return (
        <>
            <select className="guess_btn">
                <option value="1">Ib's</option>
                <option value="2">Kimchi Garden</option>
                <option value="3">Super Duper Burger</option>
            </select>
        </>
    )
}
