import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Lobby from "./Lobby";
import ActiveGame from "./ActiveGame";
import NotFound from "./NotFound";
import "./Game.css";

function Game() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="lobby" element={<Lobby />} />
        <Route path="activeGame" element={<ActiveGame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Game;
