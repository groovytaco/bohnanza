import React from 'react';
import Card from '../classes/Card.js';
import "./Game.css";
function Game ()
{
    return (
        <div className="Game">
        <Card type="coffee" x="800px" y="700px"/>
        <Card type = "cocoa" x="940px" y="700px"/>
        </div>    
    );
}

export default Game;