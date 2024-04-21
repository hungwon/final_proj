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
        </div>
    )
}