import React from "react";
import { useState } from "react";
import BeanField from "../classes/BeanField.js";
import Deck from "../classes/Deck.js";
import InfoCard from "../classes/InfoCard.js";
import TradeTable from "../classes/TradeTable.js";
import PlayerHand from "../classes/PlayerHand.js";
import nextTurnImage from "../Images/nextTurnImage.jpg";
import "./ActiveGame.css";

function ActiveGame() {
  //initialize overall game variables and functions
  const [gameState, setGameState] = useState(
    {
      'myCoinCount': 0,
      'gameStatus': "PlantSecondOrFlip2",
      'selectedCards': []
    }
  );
  function nextTurn() {
    if (gameState.gameStatus === "Flipped2Cards") {
      setGameState({
        ...gameState,
        gameStatus: "WaitingForTurn"
      });
    }
  }
  return (
    <div className="Active-game">
      <InfoCard
        username="wheathin"
        leftBeanType="chili"
        leftCardCount={3}
        rightBeanType="blue"
        rightCardCount={7}
      />
      <InfoCard
        username="wheathin"
        leftBeanType="chili"
        leftCardCount={3}
        rightBeanType="blue"
        rightCardCount={7}
      />
      <InfoCard
        username="wheathin"
        leftBeanType="chili"
        leftCardCount={3}
        rightBeanType="blue"
        rightCardCount={7}
      />
      <Deck gameState={gameState} setGameState={setGameState} />
      <TradeTable gameState={gameState} setGameState={setGameState} />
      <BeanField
        gameState={gameState}
        setGameState={setGameState}
        className="leftField"
        cardCount={9}
        fieldNum={1}
        type="coffee"
        x={-7.8}
        y={-18}
      />
      <BeanField
        gameState={gameState}
        setGameState={setGameState}
        className="rightField"
        cardCount={3}
        fieldNum={2}
        type="cocoa"
        x={1.7}
        y={-18}
      />
      <PlayerHand />
      <button
        id="Next-turn"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "4vw",
          height: "4vw",
          backgroundImage: `url(${nextTurnImage})`
        }}
        onClick={nextTurn}
      ></button>
      <h1 id="gameStatus">{gameState.selectedCards.at(0)+" "+gameState.selectedCards.at(1)}</h1>
    </div>
  );
}

export default ActiveGame;
