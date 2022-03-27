import "./Deck.css";
import DeckImage from "../Images/Deck.jpg";
import { useEffect, useState } from "react";
import Card from "./Card";

function Deck(props) {
  let gameState = props.gameState;
  let setGameState = props.setGameState;
  //=====================Initialize "deck" array for setState=====================
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
  //=====================Initialize "deckBoxShadow" variable for setState=====================
  let deckBoxShadow = "";
  if (gameState.gameStatus === "plantSecondOrFlip2") {
    deckBoxShadow = "0 0 0 0.3vw #fde32c";
  } else {
    deckBoxShadow = "0 0 0 0px #fde32c";
  }
  //=====================Initialize deck state=====================
  const [state, setState] = useState({
    deck: temp,
    leftBean: "",
    rightBean: "",
    deckBoxShadow: ""
  });
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
    setState({
      ...state,
      deck: deckArray,
    });
  }
  //=====================Handle when the deck is clicked=====================
  function deckClicked() {
    if (gameState.gameStatus === "plantSecondOrFlip2") {
      let tempDeck = state.deck;
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
      alert(tempLeftBean)
      alert(tempRightBean)
      setState({
        ...state,
        deck: tempDeck,
        leftBean: tempLeftBean,
        rightBean: tempRightBean
      });
      setGameState({
        ...gameState,
        gameStatus: "flipped2Cards",
        highlightedCards: [...gameState.highlightedCards, tempLeftBean, tempRightBean]
      });
    }
  }
   //=====================
   useEffect(() => {
    if(gameState.gameStatus==="plantSecondOrFlip2")
    {
      setState({
        ...state,
        leftBean: "",
        rightBean: ""
      });
    }
  }, [gameState.gameStatus]);
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
        gameState={gameState}
        setGameState={setGameState}
        selectable={true}
        highlighted={true}
        type={state.leftBean}
        x="15.5vw"
        y="1vw"
      />
      <Card
        id="rightBean"
        gameState={gameState}
        setGameState={setGameState}
        selectable={true}
        highlighted={true}
        type={state.rightBean}
        x="25vw"
        y="1vw"
      />
    </div>
  );
}

export default Deck;
