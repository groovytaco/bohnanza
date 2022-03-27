import React from "react";
import { useEffect, useState } from "react";
import BeanField from "../classes/BeanField.js";
import Deck from "../classes/Deck.js";
import InfoCard from "../classes/InfoCard.js";
import TradeTable from "../classes/TradeTable.js";
import PlayerHand from "../classes/PlayerHand.js";
import Instructions from "../classes/Instructions.js";
import nextTurnImage from "../Images/nextTurnImage.jpg";
import "./ActiveGame.css";

function ActiveGame() {
  //=====================Initialize game state=====================
  const [gameState, setGameState] = useState({
    myCoinCount: 0,
    gameStatus: "plantSecondOrFlip2",
    tradeStatus: "notTrading",
    justPlanted: false,
    selectedCards: [],
    highlightedCards: [],
  });
  //=====================Once all selected cards have been planted reset justPlanted bool=====================
  useEffect(() => {
    if (gameState.selectedCards.length === 0 && gameState.justPlanted) {
      setGameState({
        ...gameState,
        justPlanted: false,
      });
    }
  }, [gameState.justPlanted]);
  //=====================Once trade has been confirmed or canceled reset tradeStatus=====================
  useEffect(() => {
    if (gameState.selectedCards.length === 0) {
      if (
        gameState.tradeStatus === "confirmTrade" ||
        gameState.tradeStatus === "cancelTrade"
      )
        setGameState({
          ...gameState,
          finishTrade: false,
          tradeStatus: "notTrading",
        });
    }
  }, [gameState.tradeStatus]);
  //=====================Handle next turn button=====================
  function nextTurn() {
    if (gameState.gameStatus === "flipped2Cards") {
      if (gameState.highlightedCards.length === 0) {
        setGameState({
          ...gameState,
          gameStatus: "plantSecondOrFlip2",
        });
      }
    }
  }
  //=====================Display active game=====================
  return (
    <div className="ActiveGame">
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
      <PlayerHand gameState={gameState} setGameState={setGameState} />
      <button
        id="nextTurn"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "4vw",
          height: "4vw",
          backgroundImage: `url(${nextTurnImage})`,
        }}
        onClick={nextTurn}
      ></button>
      <h1 id="gameStatus">{gameState.myCoinCount}</h1>
      <Instructions />
    </div>
  );
}

export default ActiveGame;
