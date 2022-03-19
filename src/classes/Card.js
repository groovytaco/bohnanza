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
import { useEffect, useState } from 'react';
import "./Card.css";

function Card(props) {
  //initial gameState variables
  let gameState=props.gameState;
  let setGameState=props.setGameState;
  //initialize state variables based on props
  let hidden = false;
  if (props.type === "") {
    hidden = true;
  } else {
    hidden = false;
  }
  const [state, setState] = useState(
    {
      'highlighted': props.highlighted,
      'type': props.type,
      'xPos': props.x,
      'yPos': props.y,
      'hidden': hidden,
      'boxShadow': "",
      'needsUpdate': false
    });
  //add this card to gameState once state has updated
  useEffect(() => {
    if(state.needsUpdate)
    {
      alert("test")
      test()
      setGameState({
      ...gameState,
      selectedCards: [...gameState.selectedCards, state]
      });
      setState({...state, needsUpdate:false})
    }
  }, [state])
  function test()
  {
    
  }
  //update state when type prop is changed
  useEffect(() => {
    if (props.type === "") {
      setState({...state, hidden: true})
    } else {
      setState({...state, hidden: false})
    }
  }, [props.type])
  //update state when highlighted prop is changed
  useEffect(() => {
    if (props.highlighted) {
      setState({...state, boxShadow: "0 0 0 0.3vw #fde32c"})
    } else {
      setState({...state, boxShadow: "0 0 0 0px #fde32c"})
    }
  }, [props.highlighted])
  function cardClicked()
  {
    setState({
      ...state,
      'type': props.type,
      highlighted: false,
      boxShadow: "0 0 0 0px #fde32c",
      needsUpdate: true
      });
  }
  //set card image based on beanType
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
  return (
    <div className="Card" hidden={state.hidden} style={{ left: state.xPos, top: state.yPos }}>
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
