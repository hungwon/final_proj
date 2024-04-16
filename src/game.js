import React from "react";
import "./styleguide.css";
import data from "./data.json";
import { RestaurantCard, HintCard, ScoreCard, ProfileCard, SummaryCard, ResultCard } from "./Card";

export const Game = () => {
    // Generate random restaurant
    // TODO: Edit for daily set (seeded) vs. practice set (random),
    //       no repeat restaurants, and API usage.
    const randIndex = Math.floor(Math.random() * data.length);
    const randRestaurant = data[randIndex];

    return (
        <div className="game_page">
            {/* TODO: For testing, remove later */}

            {/* <RestaurantCard restaurant={randRestaurant}/> */}
            {/* <HintCard restaurant={randRestaurant} hintno={1} />
            <HintCard restaurant={randRestaurant} hintno={2} /> */}
            {/* <ScoreCard guessScore={75} score={85}/> */}
            {/* <ProfileCard restaurant={randRestaurant} isRevealed={false}/> */}
            {/* <SummaryCard restaurant={randRestaurant} roundno={1} guessno={2} score={85}/> */}
            <ResultCard restaurant={randRestaurant} guesses={["Ib's", "Kimchi Garden"]} guessScore={75} score={85}/>
        </div>
    )
}