import React from 'react';
import "./styleguide.css";
import data from "./data.json";
import "./score.css";

import { getRestaurant, getTotalScore, getRound, getGuessScore, getPrevGuess, getScore } from "./game.js";
import { Gnb } from "./Gnb";
import { ResultCard } from "./Card";
import { NextBtn } from "./Buttons";
import { useState } from "react";
import { get } from 'firebase/database';


export const Score = () => {

  // use state
  let [score, setScore] = useState(0);
  setScore(getScore());

  let [restaurant, setRestaurant] = useState(0);
  setRestaurant(getRestaurant());

  let [round, setRound] = useState(0);
  setRound(getRound());

  let [totalScore, setTotalScore] = useState(0);
  setTotalScore(getTotalScore());

  let [guessScore, setGuessScore] = useState(0);
  setGuessScore(getGuessScore());

  let [prevGuesses, setPrevGuesses] = useState(0);
  setPrevGuesses(getPrevGuess());

  return (
    <div className='score'>
      <Gnb round={round} totalScore={totalScore} />
      <div className='result_card_wrapper'>
        <ResultCard restaurant={restaurant} guesses={prevGuesses} guessScore={guessScore} score={score} />
      </div>
      <div className='next_btn_wrapper'>
        <NextBtn />
      </div>
    </div>
  )
}

/*
class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      scores: new Array(3).fill(0),
      round: 1
    };
  }

  setScore = (level, guesses, correct) => {
    let s = 0;
    if (correct) {
      s = level * 10 + parseInt((100 - level * 10) / guesses);
    }
    this.updateScores(s);
    this.setState(prevState => ({
      score: s,
      round: prevState.round + 1
    }));
  };

  updateScores = score => {
    this.setState(prevState => {
      const newScores = [...prevState.scores]; // Create a copy of the scores array
      newScores[prevState.round - 1] += score; // Add the score for the specified round
      return { scores: newScores };
    });
  };

  sumScores = () => {
    const { scores } = this.state;
    return scores.reduce((total, score) => total + score, 0);
  };

  render() {
    return (
      <div>
        <h1>score: {this.state.score}</h1>
        <h1>round : {this.state.round} / 3</h1>
        <h2>Total Score: {this.sumScores()} / 300</h2>
      </div>
    );
  }
}

export default Score;
*/