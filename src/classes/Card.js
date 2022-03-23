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
import { useEffect, useState } from "react";
import "./Card.css";

function Card(props) {
  //initial gameState variables
  let gameState = props.gameState;
  let setGameState = props.setGameState;
  //=====================Initialize css variables for setState=====================
  let hidden;
  if (props.type === "") {
    hidden = true;
  } else {
    hidden = false;
  }
  let boxShadow = "";
  if (props.highlighted) {
    boxShadow = "0 0 0 0.3vw #fde32c";
  } else {
    boxShadow = "0 0 0 0px #fde32c";
  }
  //=====================Initialize state variables based on props=====================
  const [state, setState] = useState({
    hidden: hidden,
    highlighted: props.highlighted,
    boxShadow: boxShadow,
    type: props.type,
    xPos: props.x,
    yPos: props.y,
    selected: false,
    opacity: 1,
    needsUpdate: false,
  });
  //=====================Handle "type" variable changing=====================
  useEffect(() => {
    //update hidden
    if (state.type === "") {
      setState({ ...state, hidden: true });
    } else {
      setState({ ...state, hidden: false });
    }
  }, [state.type]);
  //=====================Handle "highlighted" variable changing=====================
  useEffect(() => {
    //update border
    if (state.highlighted) {
      setState({ ...state, boxShadow: "0 0 0 0.3vw #fde32c" });
    } else {
      setState({ ...state, boxShadow: "0 0 0 0vw #fde32c" });
    }
  }, [state.highlighted]);
  //=====================Handle "selected" variable changing=====================
  useEffect(() => {
    //update opacity
    if (state.selected) {
      setState({ ...state, opacity: 0.1 });
    } else {
      setState({ ...state, opacity: 1 });
    }
  }, [state.selected]);
  //=====================Handle "justPlanted" gamestate variable changing=====================
  useEffect(() => {
    //if card was selected hide it and remove it from the selectedCards array in gamestate
    if (gameState.justPlanted) {
      if (state.selected) {
        let selectedCards = gameState.selectedCards;
        for (let x in selectedCards) {
          if (selectedCards.at(x) === state.type) {
            selectedCards.splice(x, 1);
            break;
          }
        }
        setGameState({
          ...gameState,
          selectedCards: selectedCards,
        });
        setState({ ...state, hidden: true, type: "", selected: false });
      }
    }
  }, [gameState.justPlanted]);
  //=====================Handle "tradeStatus" gamestate variable changing=====================
  useEffect(() => {
    if (gameState.tradeStatus==="confirmTrade") {
      if (state.selected) {
        let selectedCards = gameState.selectedCards;
        for (let x in selectedCards) {
          if (selectedCards.at(x) === state.type) {
            selectedCards.splice(x, 1);
            break;
          }
        }
        setGameState({
          ...gameState,
          selectedCards: selectedCards,
        });
        setState({ ...state, hidden: true, type: "", selected: false });
      }
    }else if (gameState.tradeStatus==="cancelTrade") {
      if (state.selected) {
        let selectedCards = gameState.selectedCards;
        for (let x in selectedCards) {
          if (selectedCards.at(x) === state.type) {
            selectedCards.splice(x, 1);
            break;
          }
        }
        setGameState({
          ...gameState,
          selectedCards: selectedCards,
        });
        setState({ ...state, selected: false });
      }
    }
  }, [gameState.tradeStatus]);
  //=====================Update state when the "type" prop is changed=====================
  useEffect(() => {
    setState({ ...state, type: props.type });
  }, [props.type]);
  //=====================Update state when "highlighted" prop is changed=====================
  useEffect(() => {
    setState({ ...state, highlighted: props.highlighted });
  }, [props.highlighted]);
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
    if (props.selectable && !gameState.startedTrade) {
      //unselect card if it was selected
      if (state.selected) {
        let selectedCards = gameState.selectedCards;
        for (let x in selectedCards) {
          if (selectedCards.at(x) === state.type) {
            selectedCards.splice(x, 1);
            break;
          }
        }
        setGameState({
          ...gameState,
          selectedCards: selectedCards,
        });
        setState({
          ...state,
          selected: false,
        });
      //select card if it was not selected
      } else {
        setGameState({
          ...gameState,
          selectedCards: [...gameState.selectedCards, state.type],
        });
        setState({
          ...state,
          selected: true,
        });
      }
    } else if (props.selectable && gameState.startedTrade) {
      alert("Must finish trade first!");
    }
  }
  //=====================Display this card=====================
  return (
    <div
      className="Card"
      hidden={state.hidden}
      style={{ opacity: state.opacity, left: state.xPos, top: state.yPos }}
    >
      <img
        onClick={cardClicked}
        className="bean-image"
        src={image}
        alt=""
        style={{
          boxShadow: state.boxShadow,
        }}
      ></img>
    </div>
  );
}

export default Card;
