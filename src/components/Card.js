import React from "react";
import "../styleguide.css";
import "./Card.css";
import { GuessBtn } from "./Buttons";
import df from "../data.json";

// Calculate color of the score number
function calculateColor(number) {
    if (number > 85) {
        return "var(--green)";
    } else if (number > 50) {
        return "var(--dark_gold)";
    } else {
        return "var(--red)";
    }
}

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

export const RestaurantCard = ({ id, numGuess, totalGuesses }) => {
    const restaurant = df[id];
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
                    <span id="guess-no">{numGuess}</span>
                    <span>/{totalGuesses}</span>
                </div>
            </div>
            <div className="prevAns-container"></div>
            <div className="shadow"></div>
        </div>
    )
}

export const HintCard = ({ id, hintno }) => {
    const restaurant = df[id];
    var Content;
    if (hintno === 1) {
        console.log("Displaying hint 1")
        Content = () => {
            return (
                <div className="restaurantDescription">
                    <span className="medium-bold">Description:</span> {restaurant.description}
                </div>
            )
        }
    } else if (hintno === 2) {
        console.log("Displaying hint 2")
        Content = () => {
            return (
                <>
                    <div className="distFromCampus">
                        <span className="medium-bold">Distance From Campus:</span> {restaurant.distance}
                    </div>
                    <div className="address">
                        <span className="medium-bold">Address:</span> {restaurant.address}
                    </div>
                </>
            )
        }
    }

    return (
        <div className="card info-card hint-card">
            <div className="card-title">hint {hintno}</div>
            <div className="divider"></div>
            <div className="card-content">
                <Content />
            </div>
        </div>
    )
}

export const ScoreCard = ({ difficultyScore, guessScore, score }) => {
    const textColor = calculateColor(score);

    return (
        <div className="card info-card score-card">
            <div className="card-title">Score : <span style={{ color: textColor }}>{score}</span></div>
            <div className="divider"></div>
            <div className="card-content">
                <div className="score-summary">
                    <div className="score-descriptions">
                        Level of Difficulty
                        <br></br>
                        Guesses Score
                        <br></br>
                        Total
                    </div>
                    <div className="scores">
                        LV {difficultyScore}
                        <br></br>
                        {guessScore}
                        <br></br>
                        {score} / 100
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ProfileCard = ({ id, isRevealed }) => {
    const restaurant = df[id];
    const menuItems = restaurant.top5_menu.join(', ');

    return (
        <div className={`card info-card ${isRevealed ? 'result-profile-card' : 'profile-card'}`}>
            {isRevealed ? (
                <div className="card-title">{restaurant.name}</div>
            ) : (
                <div className="card-title">Profile</div>
            )}
            <div className="divider"></div>
            <div className="card-content">
                <div className="restaurantProfile">
                    <span className="medium-bold">Cuisine:</span> {restaurant.cuisine}
                    <br></br>
                    <span className="medium-bold">Popular Menu Items:</span> {menuItems}
                </div>
            </div>
        </div>
    )
}

export const SummaryCard = ({ id, roundno, guessno, score, totalGuesses }) => {
    const restaurant = df[id];
    const textColor = calculateColor(score);

    return (
        <div className="card info-card summary-card">
            <div className="card-title">Round {roundno}</div>
            <div className="divider"></div>
            <div className="card-content">
                <div className="summary-info">
                    <div className="summary-line">
                        <span className="summary-descriptor">Restaurant:</span>
                        <span className="summary-result"><b>{restaurant.name}</b></span>
                    </div>
                    <div className="summary-line">
                        <span className="summary-descriptor">Guesses:</span>
                        <span className="summary-result">{guessno}/{totalGuesses}</span>
                    </div>
                    <div className="summary-line">
                        <span className="summary-descriptor">Score:</span>
                        <span className="summary-result">
                            <span className="medium-bold" style={{ color: textColor }}>{score}</span>/100
                        </span>
                    </div>
                </div>
                <div className="restaurant-link">
                    <a href={restaurant.url} rel="noreferrer" target="_blank">Link to Restaurant</a>
                </div>
            </div>
        </div>
    )
}

export const ResultCard = ({ id, guesses, guessScore, score }) => {
    const restaurant = df[id];
    const isWin = (score > 0);

    return (
        <div className="card result-card">
            <div className="result-left">
                <div className="img-container">
                    <img
                        src={restaurant.img}
                        alt={restaurant.name}
                    />
                </div>
                <div className="result-prevAns">
                    {guesses.map((guess, index) => (
                        <PrevAns
                            key={index}
                            guess={guess}
                            isCorrect={index === 0 ? isWin : false}
                        />
                    ))}
                </div>
            </div>
            <div className="result-right">
                <ProfileCard id={id} isRevealed={true} />
                <ScoreCard difficultyScore={(restaurant.popularity)} guessScore={guessScore} score={score} />
            </div>
        </div>
    )
}