import React from "react";
import { Link } from "react-router-dom";

function Lobby() {
  return (
    <>
      <h1>Lobby</h1>
      <h3>
        <Link to="/">Home Page</Link>
      </h3>
    </>
  );
}

export default Lobby;