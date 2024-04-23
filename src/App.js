import './App.css';
import './styleguide.css';
import React from 'react';
import { Landing } from './pages/Landing';
import { Game } from './pages/GamePageTest';
import { Score } from './pages/Score';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="daily" element={<Game />} />
          <Route path="score" element={<Score />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
