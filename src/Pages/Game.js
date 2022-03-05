import React from 'react';
import Card from '../classes/Card.js';
import "./Game.css";
function Game ()
{
    return (
        <div className="Game">
        <Card type="chili" x="800px" y="700px"/>
        <Card type = "blue" x="940px" y="700px"/>
        </div>    
    );
}

export default Game;