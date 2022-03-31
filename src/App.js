import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ActiveGame from './pages/ActiveGame';
import HomePage from './pages/HomePage';
import Lobby from './pages/Lobby';
import NotFound from './pages/NotFound';

const Context = React.createContext();

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<Lobby />} path="lobby" />
      <Route element={<ActiveGame />} path="activeGame" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  </BrowserRouter>
);
