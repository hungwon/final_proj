import React from "react";
import "./PlayInfo.css";
import "../styleguide.css";

export const PlayInfo = ({ onClose }) => {
    return (
        <div className="play-info-page">
            <div className="play-info">
                <div className="cross-info" onClick={onClose}></div>
                <div className="info-description">
                    <p className="info-paragraph">
                        <h1 className="info-title">
                            How To Play
                        </h1>
                        CalFoodGuessr is a game about guessing the name of a Berkeley restaurant. 
                    </p>
                    <p className="play-paragraph">
                        <h1 className="info-title">
                            Restaurant Guessing
                        </h1>
                        At the start of the game, you will be provided a photo of one of the food items of the mystery restaurant, as well as a profile of the restaurant.
                        <br></br>
                        You can guess the name of the restaurant by selecting a name from the list of restaurants.
                        <br></br>
                        With each incorrect guess made, more information is revealed.
                    </p>
                    <p className="play-paragraph">
                        <h1 className="info-title">
                            Score
                        </h1>
                        Each round has a maximum of 100 points available. Over 3 rounds, the maximum score for a game is 300 points.
                    </p>
                </div>
            </div>
        </div>
    )
}
