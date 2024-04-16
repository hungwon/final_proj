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
                <PrevAns isCorrect={false} guess={"Berkeley Dumpling House"}/>
                <PrevAns isCorrect={false} guess={"Super Duper Burgers"}/>
            </div>
            <div className="shadow"></div>
        </div>
    )
}

export const HintCard = ({ restaurant, hintno }) => {
    var Content;
    if (hintno === 1) {
        console.log("Displaying hint 1")
        Content = () => {
            return (
                <p className="restaurantDescription">
                    <span className="medium-bold">Description:</span> {restaurant.description}
                </p>
            )
            // TODO: Add additional clues (Price Point)
        }
    } else if (hintno === 2) {
        console.log("Displaying hint 2")
        Content = () => {
            return (
                <p className="distFromCampus">
                    <span className="medium-bold">Distance From Campus:</span> {restaurant.distance}
                </p>
            )
            // TODO: Add additional clues (Address)
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

export const ScoreCard = ({ restaurant, guessScore, score }) => {
    const textColor = calculateColor(score);

    // TODO: This level of difficulty is a placeholder.
    const difficultyScore = 10;

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
                        {difficultyScore}
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
                    {/* TODO: Insert restaurant link into JSON */}
                    <a href="https://www.google.com" rel="noreferrer" target= "_blank">Link to Restaurant</a>
                </div>
            </div>
        </div>
    )
}

export const ResultCard = ({ restaurant, guesses, guessScore, score }) => {
    const isWin = (score > 0);
    // TODO: Consolidate scoring variables into a single score object or use props
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
                <ProfileCard restaurant={restaurant} isRevealed={true} />
                <ScoreCard guessScore={guessScore} score={score} />
            </div>
        </div>
    )
}