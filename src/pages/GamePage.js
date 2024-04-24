import React from "react";
import "../styleguide.css";
import { Gnb } from "../components/Gnb.js";
import { RestaurantCard, HintCard, ProfileCard } from "../components/Card.js";
import { useNavigate } from 'react-router-dom';
import { NextBtn } from "../components/Buttons.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./game.css";
import { useEffect } from 'react';

export const Game = () => {
    // Empty dependency array ensures this effect runs only once on component mount
    let state = useSelector(state => state);
    let correct = state.game.correct;
    let dispatch = useDispatch();
    const navigate = useNavigate();

    let hintCards = [];
    for (let i = 1; i <= state.game.numGuess; i++) {
        if (i <= 2) {
            hintCards.push(<HintCard id={state.game.idx} hintno={i} key={i} />);
        }
    }
    useEffect(() => {
        if (correct) {
            console.log("move to next round");
            navigate('../score');
        }
    }, [correct, navigate]);

    return (
        <div className="game_page">
            <Gnb round={state.game.round} totalScore={state.game.totalScore} />
            <div className="game-container">
                <div className="round-container">
                    <div className="game-left">
                        <RestaurantCard id={state.game.idx} numGuess={state.game.numGuess} />
                    </div>
                    <div className="game-right">
                        <ProfileCard id={state.game.idx} isRevealed={false} />
                        {
                            hintCards.map((hintCard) => (
                                hintCard
                            ))
                        }
                    </div>
                </div>
                {/*<Link to="../score" relative="path"><NextBtn /></Link>*/}
            </div>
        </div>
    )
}