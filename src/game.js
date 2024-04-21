import React from "react";
import "./styleguide.css";
import data from "./data.json";
import { RestaurantCard, HintCard, ScoreCard, ProfileCard, SummaryCard, ResultCard } from "./Card";
import { GameHeader } from "./Gnb";

export const Game = () => {
    // Generate random restaurant
    // TODO: Edit for daily set (seeded) vs. practice set (random),
    //       no repeat restaurants, and API usage.
    const randIndex = Math.floor(Math.random() * data.length);
    const randRestaurant = data[randIndex];

    return (
        <div className="game_page">
<<<<<<< HEAD
            {/* TODO: For testing, remove later */}

            <RestaurantCard restaurant={randRestaurant} />
            {/* <HintCard restaurant={randRestaurant} hintno={1} />
            <HintCard restaurant={randRestaurant} hintno={2} /> */}
            {/* <ScoreCard guessScore={75} score={85}/> */}
            {/* <ProfileCard restaurant={randRestaurant} isRevealed={false}/> */}
            {/* <SummaryCard restaurant={randRestaurant} roundno={1} guessno={2} score={85}/> */}
            {/*<ResultCard restaurant={randRestaurant} guesses={["Ib's", "Kimchi Garden"]} guessScore={75} score={85} />*/}
=======
            <div className="game-container">
                <div className="game-left">
                    <RestaurantCard restaurant={randRestaurant} />
                </div>
                <div className="game-right">
                    <ProfileCard restaurant={randRestaurant} isRevealed={false} />
                    <HintCard restaurant={randRestaurant} hintno={1} />
                    <HintCard restaurant={randRestaurant} hintno={2} />
                </div>
            </div>
>>>>>>> f994fc7b83be942d2786c52d2f2e1bf9afd9750c
        </div>
    )
}