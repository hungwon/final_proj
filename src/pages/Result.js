import React from 'react';
import "../styleguide.css";
import "./result.css";
import { AgainBtn, HomeBtn } from "../components/Buttons.js";
import { useDispatch, useSelector } from 'react-redux';
import { SummaryCard } from '../components/Card.js';
import { Link } from "react-router-dom";


export const Result = () => {
    let state = useSelector(state => state);
    const summaryCards = [];

    for (let i = 0; i < state.game.totalRounds; i++) {
        summaryCards.push(<SummaryCard roundInfo={state.game.roundInfo[i]} totalGuesses={state.game.totalGuesses} />);
      }

    return (
        <div className='result_page'>
            <div className="title_wrapper">
                <p className="title">Summary</p>
            </div>
            <div className='summary_wrapper'>
                {summaryCards}
            </div>
            <div className="score_wrapper">
                <p className="score">
                    <span className="score_txt">Final Score: </span>
                    <span className="num">{state.game.totalScore}</span>
                    <span className="max_score">/300</span>
                </p>
            </div>
            <div className="btn_wrapper">
                <Link to="../">
                    <HomeBtn />
                </Link>
            </div>
        </div>
    )
}
