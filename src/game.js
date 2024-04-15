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
            <RestaurantCard restaurant={randRestaurant}/>
            <HintCard />
            <ScoreCard />
            <ProfileCard />
            <SummaryCard />
            <ResultCard />
        </div>
    )
}