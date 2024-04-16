import React from 'react';

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