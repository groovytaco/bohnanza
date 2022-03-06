import React from 'react';
import BeanField from '../classes/BeanField.js';
import Deck from '../classes/Deck.js';
import InfoCard from '../classes/InfoCard.js';
import TradeTable from '../classes/TradeTable.js';
import PlayerHand from '../classes/PlayerHand.js';
import "./Game.css";

function Game() {
    return (
        <div className="Game">
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <Deck/>
            <TradeTable/>
            <BeanField/>
            <PlayerHand/>
            <button className="Next-turn"
                title="NextTurn"
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: 80,
                    height: 80
                }}
            ></button>
        </div>
    );
}

export default Game;