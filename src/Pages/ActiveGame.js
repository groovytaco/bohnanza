import React from "react";
import { useState } from 'react';
import BeanField from '../classes/BeanField.js';
import Deck from '../classes/Deck.js';
import InfoCard from '../classes/InfoCard.js';
import TradeTable from '../classes/TradeTable.js';
import PlayerHand from '../classes/PlayerHand.js';
import "./ActiveGame.css";

function ActiveGame() {
    const [gameStatus, setGameStatus] = useState('PlantSecondOrFlip2');
    const changeGameStatus= (data) =>
    {
        setGameStatus(data);
    }
    function nextTurn()
    {
        if(gameStatus=== "Flipped2Cards")
        {
            setGameStatus("WaitingForTurn");
        }
    }
  return (
      <div className="Active-game">
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <Deck changeGameStatus = {changeGameStatus} gameStatus = {gameStatus}/>
            <TradeTable/>
            <BeanField/>
            <PlayerHand/>
            <h1>{gameStatus}</h1>
            <button className="Next-turn"
                title="NextTurn"
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "4vw",
                    height: "4vw"
                }}
                onClick={nextTurn}
            ></button>
        </div>
  );
}

export default ActiveGame;