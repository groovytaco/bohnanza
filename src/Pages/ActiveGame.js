import React from "react";
import { useState } from "react";
import BeanField from "../classes/BeanField.js";
import Deck from "../classes/Deck.js";
import InfoCard from "../classes/InfoCard.js";
import TradeTable from "../classes/TradeTable.js";
import PlayerHand from "../classes/PlayerHand.js";
import "./ActiveGame.css";

function ActiveGame() {
  //initialize overall game variables and functions
  const [gameStatus, setGameStatus] = useState("PlantSecondOrFlip2");
  function nextTurn() {
    if (gameStatus === "Flipped2Cards") {
      setGameStatus("WaitingForTurn");
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
      <Deck changeGameStatus={setGameStatus} gameStatus={gameStatus} />
      <TradeTable />
      <BeanField
        className="leftField"
        cardCount={6}
        fieldNum={1}
        type="coffee"
        x={-7.8}
        y={-18}
      />
      <BeanField
        className="rightField"
        cardCount={2}
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
        }}
        onClick={nextTurn}
      ></button>
      <h1 id="gameStatus">{gameStatus}</h1>
    </div>
  );
}

export default ActiveGame;
