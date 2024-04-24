import React from 'react';
import "../styleguide.css";
import "./score.css";
import { Gnb } from "../components/Gnb.js";
import { ResultCard } from "../components/Card.js";
import { NextBtn } from "../components/Buttons.js";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";


export const Score = () => {
  let state = useSelector(state => state);

  return (
    <div className='score_page'>
      <Gnb round={state.game.round} totalScore={state.game.totalScore} />
      <div className='result_card_wrapper'>
        {console.log(state.game.idx)}
        <ResultCard id={state.game.idx} guessScore={state.game.guessScore} score={state.game.score} />
      </div>
      <div className='next_btn_wrapper'>
        <Link to="../daily" relative='path'><NextBtn /></Link>
      </div>
    </div>
  )
}
