import "./Deck.css";
import DeckImage from "../Images/Deck.jpg";
import { useState } from "react";
import Card from "./Card";

function Deck(props) {
  const [leftBean, setLeftBean] = useState("");
  const [rightBean, setRightBean] = useState("");
  //=====================Initialize "deck" array=====================
  
  //=====================Initialize "deckBoxShadow" variable=====================
  let tempDeckBoxShadow = "";
  if (props.gameStatus === "plantSecondOrFlip2") {
    tempDeckBoxShadow = "0 0 0 0.3vw #fde32c";
  } else {
    tempDeckBoxShadow = "0 0 0 0px #fde32c";
  }
  const [deckBoxShadow, setDeckBoxShadow] = useState(tempDeckBoxShadow);
  //=====================Handle when the deck is clicked=====================
  function deckClicked() {
    if (props.gameStatus === "plantSecondOrFlip2") {
      let tempDeck = props.deck;
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
      //props.setDeck(tempDeck);
      setLeftBean(tempLeftBean);
      setRightBean(tempRightBean);
      props.setGameStatus("flipped2Cards");
      props.setHighlightedCards([
        ...props.highlightedCards,
        tempLeftBean,
        tempRightBean,
      ]);
      console.log(tempLeftBean)
      console.log(tempRightBean)
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
