import React from 'react';
import "../styleguide.css";
import df from "../data.json";
import "./score.css";
import { Gnb } from "../components/Gnb.js";
import { ResultCard } from "../components/Card.js";
import { NextBtn } from "../components/Buttons.js";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";


export const Score = () => {
  let state = useSelector(state => state);
  let dispatch = useDispatch();


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

/*
let [restaurant, setRestaurant] = useState(data[0])
  let [round, setRound] = useState(1);
  let [totalScore, setTotalScore] = useState(0);
  let [guessScore, setGuessScore] = useState(0);
  let [score, setScore] = useState(0);
  let [prevGuesses, setPrevGuesses] = useState([]);

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

    let guessScore_data = parseInt(getGuessScore());
    if (!guessScore_data) {
      console.log("guessScore is null");
      setGuessScore(0);
    } else {
      setGuessScore(guessScore_data);
    }

    let score_data = parseInt(getScore());
    if (!score_data) {
      console.log("score is null");
      setScore(0);
    } else {
      setScore(score_data);
    }

    let prevGuesses_data = getPrevGuess();
    if (!prevGuesses_data) {
      console.log("prevGuesses is null");
      setPrevGuesses([]);
    } else {
      setPrevGuesses(prevGuesses_data);
    }
  }, []); 
  */