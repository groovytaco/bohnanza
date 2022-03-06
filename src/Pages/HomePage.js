import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <br />
      <h3>
        <Link to="lobby">Lobby</Link>
      </h3>
      <h3>
        <Link to="/party-zone">Party Zone</Link>
      </h3>
    </>
  );
}

export default HomePage;
