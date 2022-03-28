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
  //Initialize the deck
  let temp = [];
  for (let i = 0; i < 24; i++) {
    temp.push("coffee");
  }
  for (let i = 0; i < 22; i++) {
    temp.push("wax");
  }
  for (let i = 0; i < 20; i++) {
    temp.push("blue");
  }
  for (let i = 0; i < 18; i++) {
    temp.push("chili");
  }
  for (let i = 0; i < 16; i++) {
    temp.push("stink");
  }
  for (let i = 0; i < 14; i++) {
    temp.push("green");
  }
  for (let i = 0; i < 12; i++) {
    temp.push("soy");
  }
  for (let i = 0; i < 10; i++) {
    temp.push("blackEyed");
  }
  for (let i = 0; i < 8; i++) {
    temp.push("red");
  }
  for (let i = 0; i < 6; i++) {
    temp.push("garden");
  }
  for (let i = 0; i < 5; i++) {
    temp.push("cocoa");
  }
  //shuffle deck
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * temp.length);
    let location2 = Math.floor(Math.random() * temp.length);
    let tmp = temp[location1];
    temp[location1] = temp[location2];
    temp[location2] = tmp;
  }
  const [deck, setDeck] = useState(temp);
  //=====================Initialize shuffle function=====================
  function shuffle(deckArray) {
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * deckArray.length);
      let location2 = Math.floor(Math.random() * deckArray.length);
      let tmp = deckArray[location1];

      deckArray[location1] = deckArray[location2];
      deckArray[location2] = tmp;
    }
    setDeck(deckArray);
  }
  //=====================Initialize game state=====================
  const [myCoinCount, setMyCoinCount] = useState(0);
  const [gameStatus, setGameStatus] = useState("plantSecondOrFlip2");
  const [tradeStatus, setTradeStatus] = useState("notTrading");
  const [highlightedCards, setHighlightedCards] = useState([]);
  const [justPlanted, setJustPlanted] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  //=====================Once all selected cards have been planted reset justPlanted bool=====================
  useEffect(() => {
    if (selectedCards.length === 0 && justPlanted) setJustPlanted(false);
  }, [justPlanted, selectedCards]);
  //=====================Once trade has been confirmed or canceled reset tradeStatus=====================
  useEffect(() => {
    console.log({ tradeStatus });
    if (
      selectedCards.length === 0 &&
      (tradeStatus === "confirmTrade" || tradeStatus === "cancelTrade")
    )
      setTradeStatus("notTrading");
  }, [tradeStatus, selectedCards]);
  //=====================Handle next turn button=====================
  function nextTurn() {
    if (gameStatus === "flipped2Cards") {
      if (highlightedCards.length === 0) {
        setGameStatus("plantSecondOrFlip2");
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
      <Deck
        deck={deck}
        setDeck={setDeck}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        tradeStatus={tradeStatus}
        justPlanted={justPlanted}
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
        highlightedCards={highlightedCards}
        setHighlightedCards={setHighlightedCards}
      />
      <TradeTable
        tradeStatus={tradeStatus}
        setTradeStatus={setTradeStatus}
        justPlanted={justPlanted}
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
        highlightedCards={highlightedCards}
        setHighlightedCards={setHighlightedCards}
      />
      <BeanField
        className="leftField"
        cardCount={0}
        fieldNum={1}
        type=""
        x={-7.8}
        y={-18}
        myCoinCount={myCoinCount}
        setMyCoinCount={setMyCoinCount}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        tradeStatus={tradeStatus}
        justPlanted={justPlanted}
        setJustPlanted={setJustPlanted}
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
        highlightedCards={highlightedCards}
        setHighlightedCards={setHighlightedCards}
      />
      <BeanField
        className="rightField"
        cardCount={0}
        fieldNum={2}
        type=""
        x={1.7}
        y={-18}
        myCoinCount={myCoinCount}
        setMyCoinCount={setMyCoinCount}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        tradeStatus={tradeStatus}
        justPlanted={justPlanted}
        setJustPlanted={setJustPlanted}
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
        highlightedCards={highlightedCards}
        setHighlightedCards={setHighlightedCards}
      />
      <PlayerHand
        myCoinCount={myCoinCount}
        setMyCoinCount={setMyCoinCount}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        tradeStatus={tradeStatus}
        setTradeStatus={setTradeStatus}
        justPlanted={justPlanted}
        setJustPlanted={setJustPlanted}
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
        highlightedCards={highlightedCards}
        setHighlightedCards={setHighlightedCards}
      />
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
      <h1 id="gameStatus">{myCoinCount}</h1>
      <Instructions />
    </div>
  );
}

export default ActiveGame;
