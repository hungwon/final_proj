import './App.css';
import './Styleguide.css';
import React from 'react';
import { DailyBtn, AgainBtn, NextBtn, HomeBtn, PracticeBtn, GuessBtn } from './Buttons';

function App() {
  return (
    <div className="App">
      <DailyBtn />
      <br />
      <br />
      <AgainBtn />
      <br />
      <br />
      <NextBtn />
      <br />
      <br />
      <HomeBtn />
      <br />
      <br />
      <PracticeBtn />
      <br />
      <br />
      <GuessBtn />
    </div>
  );
}

export default App;
