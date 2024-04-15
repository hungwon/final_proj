import React from "react";
import "./styleguide.css";
import "./Card.css";
import { GuessBtn } from "./Buttons";

const totalGuesses = 5;

const PrevAns = ({ isCorrect, guess }) => {
    return (
        <div className="prev-ans">
            {isCorrect ? (
                <div className="checkmark"></div>
            ) : (
                <div className="cross"></div>
            )}
            <span>{guess}</span>
        </div>
    )
}

export const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="card restaurant-card">
            <div className="img-container">
                <img 
                    src={restaurant.img}
                    alt="Menu item clue"
                />
            </div>
            <div className="guess-container">
                <GuessBtn />
                <div className="trial-indicator">
                    <span id="guess-no">1</span>
                    <span>/{totalGuesses}</span>
                </div>
            </div>
            <div className="prevAns-container">
                {/* TODO: For testing, remove later */}
                <PrevAns isCorrect={true} guess={"Kimchi Garden"}/>
                <PrevAns isCorrect={false} guess={"Super Duper Burgers"}/>
                <PrevAns isCorrect={false} guess={"Ib's"}/>
            </div>
            <div className="shadow"></div>
        </div>
    )
}

export const HintCard = ({ restaurant }) => {
    return (
        <div className="card info-card hint-card">
            
        </div>
    )
}

export const ScoreCard = () => {
    return (
        <div className="card info-card score-card">
            
        </div>
    )
}

export const ProfileCard = () => {
    return (
        <div className="card info-card profile-card">
            
        </div>
    )
}

export const SummaryCard = () => {
    return (
        <div className="card info-card summary-card">
            
        </div>
    )
}

export const ResultCard = () => {
    return (
        <div className="card result-card">
            
        </div>
    )
}