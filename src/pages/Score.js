import React from 'react';
import "../styleguide.css";
import "./score.css";
import { Gnb } from "../components/Gnb.js";
import { ResultCard } from "../components/Card.js";
import { NextBtn, ResultsBtn } from "../components/Buttons.js";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


export const Score = () => {
  let state = useSelector(state => state);

  return (
    <div className='score_page'>
      <Gnb round={state.game.round} totalScore={state.game.totalScore} />
      <div className='result_card_wrapper'>
        <ResultCard id={state.game.idx} guessScore={state.game.guessScore} score={state.game.score} />
      </div>
      <div className='next_btn_wrapper'>
        {(state.game.round < state.game.totalRounds) ? (
          <Link to={"../" + state.game.currentMode} relative='path'><NextBtn /></Link>
        ) : (
          <Link to="../result" relative='path'><ResultsBtn /></Link>
        )}
      </div>
    </div>
  )
}
