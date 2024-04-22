import './App.css';
import './styleguide.css';
import React from 'react';
import { Landing } from './Landing';
import { Game } from './GamePageTest';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="daily" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
