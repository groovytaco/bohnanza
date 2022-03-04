import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import Lobby from "./Pages/Lobby";
import Game from "./Pages/Game";
import "./App.css";
function App() {
  return (
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/game" element={<Game />} />
        </Routes>
  </BrowserRouter>
  );
}

export default App;
