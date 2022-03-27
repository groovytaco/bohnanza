import "./Deck.css";
import DeckImage from "../Images/Deck.jpg";
import { useState } from "react";
import Card from "./Card";

function Deck(props) {
  const [leftBean, setLeftBean] = useState("");
  const [rightBean, setRightBean] = useState("");
  //=====================Initialize "deck" array=====================
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
  //=====================Initialize "deckBoxShadow" variable=====================
  let tempDeckBoxShadow = "";
  if (props.gameStatus === "plantSecondOrFlip2") {
    tempDeckBoxShadow = "0 0 0 0.3vw #fde32c";
  } else {
    tempDeckBoxShadow = "0 0 0 0px #fde32c";
  }
  const [deckBoxShadow, setDeckBoxShadow] = useState(tempDeckBoxShadow);
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
  //=====================Handle when the deck is clicked=====================
  function deckClicked() {
    if (props.gameStatus === "plantSecondOrFlip2") {
      let tempDeck = deck;
      let tempLeftBean = "";
      let tempRightBean = "";
      if (tempDeck.length >= 0) {
        tempLeftBean = tempDeck.at(tempDeck.length - 1);
        tempDeck.pop();
        tempRightBean = tempDeck.at(tempDeck.length - 1);
        tempDeck.pop();
      } else if (tempDeck.length === 1) {
        tempLeftBean = tempDeck.at(tempDeck.length - 1);
        tempDeck.pop();
        tempRightBean = "";
      }
      setDeck(tempDeck);
      setLeftBean(tempLeftBean);
      setRightBean(tempRightBean);
      props.setGameStatus("flipped2Cards");
      props.setHighlightedCards([
        ...props.highlightedCards,
        tempLeftBean,
        tempRightBean,
      ]);
    }
  }
  //=====================Display the deck and the two flipped cards=====================
  return (
    <div className="Deck" onClick={deckClicked}>
      <img
        id="DeckImage"
        style={{ boxShadow: deckBoxShadow }}
        src={DeckImage}
        alt="DeckImage"
      />
      <Card
        id="leftBean"
        selectable={true}
        highlighted={true}
        type={leftBean}
        x="15.5vw"
        y="1vw"
        tradeStatus={props.tradeStatus}
        justPlanted={props.justPlanted}
        selectedCards={props.selectedCards}
        setSelectedCards={props.setSelectedCards}
        highlightedCards={props.highlightedCards}
        setHighlightedCards={props.setHighlightedCards}
      />
      <Card
        id="rightBean"
        selectable={true}
        highlighted={true}
        type={rightBean}
        x="25vw"
        y="1vw"
        tradeStatus={props.tradeStatus}
        justPlanted={props.justPlanted}
        selectedCards={props.selectedCards}
        setSelectedCards={props.setSelectedCards}
        highlightedCards={props.highlightedCards}
        setHighlightedCards={props.setHighlightedCards}
      />
    </div>
  );
}

export default Deck;
