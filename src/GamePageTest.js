import React from "react";
import "./styleguide.css";
import data from "./data.json";
import { Gnb } from "./Gnb";
import { RestaurantCard, HintCard, ProfileCard } from "./Card";
import { getRestaurant, getTotalScore, getRound, getNumGuess } from "./game.js";
import { NextBtn } from "./Buttons";
import { Link } from "react-router-dom";
// just for test
import "./game.css";
import { useEffect, useState } from "react";

export const Game = () => {
    let [restaurant, setRestaurant] = useState(data[0])
    let [round, setRound] = useState(1);
    let [totalScore, setTotalScore] = useState(0);
    let [numGuess, setNumGuess] = useState(0);

    useEffect(() => {
        let restaurant_data = getRestaurant();
        console.log(restaurant_data.name);
        if (restaurant_data) {
            setRestaurant(restaurant_data);
        } else {
            console.log("rest_obj is null");
            setRestaurant(data[0]);
        }

        let round_data = parseInt(getRound());
        if (!round_data) {
            console.log("round is null");
            setRound(1);
        } else {
            setRound(round_data);
        }

        let totScore_data = parseInt(getTotalScore());
        if (!totScore_data) {
            console.log("totalScore is null");
            setTotalScore(0);
        } else {
            setTotalScore(totScore_data);
        }

        let numGuess_data = parseInt(getNumGuess());
        if (!numGuess_data) {
            console.log("numGuess is null");
            setNumGuess(0);
        } else {
            setNumGuess(numGuess_data);
        }
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    let hintCards = [];
    for (let i = 1; i <= numGuess; i++) {
        if (i <= 2) {
            hintCards.push(<HintCard restaurant={restaurant} hintno={i} key={i} />);
        }
    }



    return (
        <div className="game_page">
            <Gnb round={round} totalScore={totalScore} />
            <div className="game-container">
                <div className="round-container">
                    <div className="game-left">
                        <RestaurantCard restaurant={restaurant} />
                    </div>
                    <div className="game-right">
                        <ProfileCard restaurant={restaurant} isRevealed={false} />
                        {
                            hintCards.map((hintCard) => (
                                hintCard
                            ))
                        }
                    </div>
                </div>
                <Link to="../score" relative="path"><NextBtn /></Link>
            </div>
        </div>
    )
}