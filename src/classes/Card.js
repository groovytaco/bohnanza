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
import "./Card.css";

function Card(props) {
  //initialize variable based on properties
  let highlighted = props.highlighted;
  let type = props.type;
  let xPos = props.x;
  let yPos = props.y;
  //set card image based on beanType
  let image;
  switch (type) {
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
  //set border style based on highlighted variable
  let boxShadow;
  if (highlighted) {
    boxShadow = "0 0 0 0.3vw #fde32c";
  } else {
    boxShadow = "0 0 0 0px #fde32c";
  }
  let hidden = false;
  if (type === "") {
    hidden = true;
  } else {
    hidden = false;
  }
  return (
    <div className="Card" hidden={hidden} style={{ left: xPos, top: yPos }}>
      <img
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
