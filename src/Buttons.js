import React from "react";
import "./Styleguide.css";
import "./Btn.css";
import data from "./data.json";


export const DailyBtn = () => {
    console.log("Daily button clicked");
    return (
        <>
            <button className="daily_btn start_btn">Daily</button>
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
    return (
        <>
            <select className="guess_btn">
                {
                    data.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))
                }
            </select>
        </>
    )
}
