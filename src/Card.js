import React from "react";
import "./styleguide.css";
import "./Card.css";
import { GuessBtn } from "./Buttons";

const totalGuesses = 5;

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
            </div>
        </div>
    )
}

export const HintCard = ({ restaurant, hintno }) => {
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

export const ProfileCard = ({ restaurant, isRevealed }) => {
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

export const SummaryCard = ({ restaurant, roundno, guessno, score }) => {
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

export const ResultCard = ({ restaurant, guessScore, score }) => {
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
            </div>
            <div className="result-right">
                <ProfileCard restaurant={restaurant} isRevealed={true} />
                <ScoreCard difficultyScore={(restaurant.popularity)} guessScore={guessScore} score={score} />
            </div>
        </div>
    )
}