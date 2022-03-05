import React from 'react';
import Card from '../classes/Card.js';
import "./Game.css";
function Game ()
{
    var cards = [<Card type = "coffee" />,<Card type = "blue" />]
    return (
        <div className="Game">
            <header className="Game-header">
                <p>
                    <font size="32">
                        <b>Game</b>
                    </font>
                </p>
            </header>
        </div>,
        cards.map((Card) => <div>{Card}</div>)
    );
}

export default Game;