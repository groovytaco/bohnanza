import React from "react";
import cocoa from "../Beans/Cocoa.jpg";
import garden from "../Beans/Garden.jpg";
import red from "../Beans/Red.jpg";
import blackEyed from "../Beans/Black-eyed.jpg";
import soy from "../Beans/Soy.jpg";
import green from "../Beans/Green.jpg";
import stink from "../Beans/Stink.jpg";
import chili from "../Beans/Chili.jpg";
import blue from "../Beans/Blue.jpg";
import wax from "../Beans/Wax.jpg";
import coffee from "../Beans/Coffee.jpg";
import { useState } from "react";
import "./Card.css";

function Card(props) {
  //=====================Initialize css variables for setState=====================
  let tempHidden;
  if (props.type === "") {
    tempHidden = true;
  } else {
    tempHidden = false;
  }
  const [hidden, setHidden] = useState(tempHidden);
  let tempBoxShadow = "";
  if (props.highlighted) {
    tempBoxShadow = "0 0 0 0.3vw #fde32c";
  } else {
    tempBoxShadow = "0 0 0 0px #fde32c";
  }
  const [boxShadow, setBoxShadow] = useState(tempBoxShadow);
  //=====================Initialize state variables based on props=====================
  const [highlighted, setHighlighted] = useState(props.highlighted);
  const [type, setType] = useState(props.type);
  const [selected, setSelected] = useState(false);
  const [opacity, setOpacity] = useState(1);
  //=====================Handle "selected" variable changing=====================

  //=====================Handle "justPlanted" gamestate variable changing=====================
  //if card was selected hide it and remove it from the selectedCards array in gamestate
  if (props.justPlanted) {
    if (selected) {
      //remove this card from the highlightedCards array
      let selectedCards = props.selectedCards;
      let highlightedCards = props.highlightedCards;
      for (let x in selectedCards) {
        if (selectedCards.at(x) === type) {
          selectedCards.splice(x, 1);
          break;
        }
      }
      if (highlighted) {
        //remove this card from the highlightedCards array
        for (let y in highlightedCards) {
          if (highlightedCards.at(y) === type) {
            highlightedCards.splice(y, 1);
            break;
          }
        }
      }
      props.setSelectedCards(selectedCards);
      props.setHighlightedCards(highlightedCards);
      setHidden(true);
      setType("");
      setSelected(false);
      setOpacity(1);
    }
  }
  //=====================Handle "tradeStatus" gamestate variable changing=====================
  if (props.tradeStatus === "confirmTrade") {
    if (selected) {
      //remove this card from the highlightedCards array
      let selectedCards = props.selectedCards;
      let highlightedCards = props.highlightedCards;
      for (let x in selectedCards) {
        if (selectedCards.at(x) === type) {
          selectedCards.splice(x, 1);
          break;
        }
      }
      if (highlighted) {
        //remove this card from the highlightedCards array
        for (let y in highlightedCards) {
          if (highlightedCards.at(y) === type) {
            highlightedCards.splice(y, 1);
            break;
          }
        }
      }
      props.setSelectedCards(selectedCards);
      props.setHighlightedCards(highlightedCards);
      setHidden(true);
      setType("");
      setSelected(false);
      setOpacity(1);
    }
  } else if (props.tradeStatus === "cancelTrade") {
    if (selected) {
      let selectedCards = props.selectedCards;
      for (let x in selectedCards) {
        if (selectedCards.at(x) === type) {
          selectedCards.splice(x, 1);
          break;
        }
      }
      props.setSelectedCards(selectedCards);
      setSelected(false);
      setOpacity(1);
    }
  }
  //=====================Set card image based on beanType=====================
  let image;
  switch (props.type) {
    case "cocoa":
      image = cocoa;
      break;
    case "garden":
      image = garden;
      break;
    case "red":
      image = red;
      break;
    case "blackEyed":
      image = blackEyed;
      break;
    case "soy":
      image = soy;
      break;
    case "green":
      image = green;
      break;
    case "stink":
      image = stink;
      break;
    case "chili":
      image = chili;
      break;
    case "blue":
      image = blue;
      break;
    case "wax":
      image = wax;
      break;
    case "coffee":
      image = coffee;
      break;
    default:
  }
  //=====================Handle this card being clicked=====================
  function cardClicked() {
    if (props.selectable && props.tradeStatus === "notTrading") {
      //unselect card if it was selected
      if (selected) {
        let selectedCards = props.selectedCards;
        for (let x in selectedCards) {
          if (selectedCards.at(x) === type) {
            selectedCards.splice(x, 1);
            break;
          }
        }
        props.setSelectedCards(selectedCards);
        setSelected(false);
        setOpacity(1);
        //select card if it was not selected
      } else {
        props.setSelectedCards(...props.selectedCards, type);
        setSelected(true);
        setOpacity(0.1);
      }
    } else if (props.selectable && props.tradeStatus !== "notTrading") {
      console.log(props.selectable, props.tradeStatus);
      alert("Must finish trade first!");
    }
  }
  //=====================Display this card=====================
  return (
    <div
      className="Card"
      hidden={hidden}
      style={{ opacity: opacity, left: props.x, top: props.y }}
    >
      <img
        onClick={cardClicked}
        className="bean-image"
        src={image}
        alt=""
        style={{
          boxShadow: boxShadow,
        }}
      ></img>
    </div>
  );
}

export default Card;
