import "./BeanField.css";
import Card from "../classes/Card.js";
import leftField from "../Images/1stBeanField.PNG";
import rightField from "../Images/2ndBeanField.PNG";
import coinImage from "../Images/coin.jpg";
import { useState } from "react";

function BeanField(props) {
  //=====================Initialize coinReq variable=====================
  let temp = [null];
  switch (props.type) {
    case "cocoa":
      temp = [2, 2, 3, 4];
      break;
    case "garden":
      temp = [2, 2, 3];
      break;
    case "red":
      temp = [2, 3, 4, 5];
      break;
    case "blackEyed":
      temp = [2, 4, 5, 6];
      break;
    case "soy":
      temp = [2, 4, 6, 7];
      break;
    case "green":
      temp = [3, 5, 6, 7];
      break;
    case "stink":
      temp = [3, 5, 7, 8];
      break;
    case "chili":
      temp = [3, 6, 8, 9];
      break;
    case "blue":
      temp = [4, 6, 8, 10];
      break;
    case "wax":
      temp = [4, 7, 9, 11];
      break;
    case "coffee":
      temp = [4, 7, 10, 12];
      break;
    default:
  }
  const [coinReq, setCoinReq] = useState(temp);
  //=====================Initialize coinCount and coinTarget variables=====================
  //set coinCount
  let i = 0;
  while (props.cardCount >= temp.at(i) && i < temp.length) {
    i++;
  }
  const [coinCount, setCoinCount] = useState(i);
  //set coinTarget
  let tempCoinTarget = 0;
  if (coinCount < temp.length) {
    tempCoinTarget = temp.at(coinCount);
  } else {
    tempCoinTarget = temp.at(temp.length - 1);
  }
  const [coinTarget, setCoinTarget] = useState(tempCoinTarget);
  //=====================Initialize state variable based on props=====================
  const [cardType, setCardType] = useState(props.type);
  const [cardCount, setCardCount] = useState(props.cardCount);

  //initialize fieldImage based on fieldNum prop
  let fieldImage;
  if (props.fieldNum === 1) {
    fieldImage = leftField;
  } else if (props.fieldNum === 2) {
    fieldImage = rightField;
  }
  //=====================Update state when the "type" variable is changed=====================
  //=====================Handle harvest button=====================
  function harvest() {
    //Update player coin total
    props.setMyCoinCount(props.myCoinCount + coinCount);
    //Reset beanfield to empty
    setCardType("");
    setCardCount(0);
  }
  //=====================Handle plant button=====================
  function plant() {
    const cards = props.selectedCards;
    if (cards.length > 0) {
      let allowPlant = true;
      if (props.gameStatus === "trading") {
        alert("Finish trade before planting");
        //Handle planting when beanField is empty
      } else if (cardType === "") {
        //Make sure all selected cards are the same type
        const firstCard = cards.at(0);
        for (let i = 0; i < cards.length; i++) {
          if (cards.at(i) !== firstCard) {
            allowPlant = false;
          }
        }
        if (allowPlant) {
          setCardType(firstCard);
          setCardCount(cards.length);
          props.setJustPlanted(true);
          props.setSelectedCards([]);
        } else {
          alert("All selected cards must match the beanfield");
        }
        //Handle planting when beanField is not empty
      } else {
        //Make sure all selected cards are the same type as the beanField
        for (let i = 0; i < cards.length; i++) {
          if (cards.at(i) !== cardType) {
            allowPlant = false;
          }
        }
        if (allowPlant) {
          setCardCount(cardCount + cards.length);
          props.setJustPlanted(true);
          props.setSelectedCards([]);
        } else {
          alert("All selected cards must match the beanfield");
        }
      }
    }
  }
  //=====================Display beanField=====================
  return (
    <div
      className="BeanField"
      style={{
        position: "absolute",
        left: 50 + props.x + "vw",
        top: 50 + props.y + "vh",
        width: "6.5vw",
        height: cardCount + 19.1 + "vw",
      }}
    >
      <button
        id="harvestButton"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "6.5vw",
          height: "2vw",
        }}
        onClick={harvest}
      >
        Harvest
      </button>

      <img
        id="fieldImage"
        alt=""
        src={fieldImage}
        style={{ left: 0, top: 2 + "vw" }}
      />
      {(() => {
        const cards = [];
        for (let i = 0; i < cardCount; i++) {
          cards.push(
            <Card
              key={i}
              type={cardType}
              x={0}
              y={5 + i + "vw"}
              tradeStatus={props.tradeStatus}
              justPlanted={props.justPlanted}
              selectedCards={props.selectedCards}
              setSelectedCards={props.setSelectedCards}
              highlightedCards={props.highlightedCards}
              setHighlightedCards={props.setHighlightedCards}
            />
          );
        }
        return cards;
      })()}

      {(() => {
        const coinImgs = [];
        for (let i = 0; i < coinCount; i++) {
          coinImgs.push(
            <img
              key={i}
              id="coinImage"
              alt=""
              src={coinImage}
              style={{
                left: 1.6 * i + "vw",
                top: cardCount + 15.5 + "vw",
              }}
            />
          );
        }
        return coinImgs;
      })()}

      <div
        id="coinProgress"
        style={{
          position: "absolute",
          textAlign: "center",
          left: 0,
          width: "6.5vw",
          top: cardCount + 14 + "vw",
          height: "1.5vw",
        }}
      >
        {cardCount}/{coinTarget}
      </div>
      <button
        id="plantButton"
        style={{
          position: "absolute",
          left: 0,
          top: cardCount + 17 + "vw",
          width: "6.5vw",
          height: "2vw",
        }}
        onClick={plant}
      >
        Plant
      </button>
    </div>
  );
}

export default BeanField;
