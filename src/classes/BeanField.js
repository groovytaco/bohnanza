import "./BeanField.css";
import Card from "../classes/Card.js";
import leftField from "../Images/1stBeanField.PNG";
import rightField from "../Images/2ndBeanField.PNG";
import coinImage from "../Images/coin.jpg";
import { useEffect, useState } from "react";

function BeanField(props) {
  //initial gameState variables
  let gameState = props.gameState;
  let setGameState = props.setGameState;
  //=====================Initialize coinReq variable for setState=====================
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
  //=====================Initialize coinCount and coinTarget variables for setState=====================
  //set coinCount
  let i = 0;
  while (props.cardCount >= temp.at(i) && i < temp.length) {
    i++;
  }
  let coinCount = i;
  //set coinTarget
  let coinTarget = 0;
  if (coinCount < temp.length) {
    coinTarget = temp.at(coinCount);
  } else {
    coinTarget = temp.at(temp.length - 1);
  }
  //=====================Initialize state variable based on props=====================
  const [state, setState] = useState({
    x: props.x,
    y: props.y,
    cardType: props.type,
    cardCount: props.cardCount,
    addCoins: props.addCoins,
    fieldNum: props.fieldNum,
    coinReq: temp,
    coinCount: coinCount,
    coinTarget: coinTarget,
  });
  //initialize fieldImage based on fieldNum prop
  let fieldImage;
  if (props.fieldNum === 1) {
    fieldImage = leftField;
  } else if (props.fieldNum === 2) {
    fieldImage = rightField;
  }
  //=====================Update state when the "type" variable is changed=====================
  useEffect(() => {
    //Update coinReq
    let temp = [null];
    switch (state.cardType) {
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
    //Update coinCount
    let i = 0;
    while (state.cardCount >= temp.at(i) && i < temp.length) {
      i++;
    }
    let coinCount = i;
    //Update coinTarget
    let coinTarget = 0;
    if (coinCount < temp.length) {
      coinTarget = temp.at(coinCount);
    } else {
      coinTarget = temp.at(temp.length - 1);
    }
    if (state.cardType === "") {
      coinCount = 0;
      coinTarget = 0;
    }
    //Update state
    setState({
      ...state,
      coinReq: temp,
      coinCount: coinCount,
      coinTarget: coinTarget,
    });
  }, [state.cardType, state.cardCount]);
  //=====================Handle harvest button=====================
  function harvest() {
    //Update player coin total
    setGameState({
      ...gameState,
      myCoinCount: gameState.myCoinCount + state.coinCount,
    });
    //Reset beanfield to empty
    setState({
      ...state,
      cardType: "",
      cardCount: 0,
    });
  }
  //=====================Handle plant button=====================
  function plant() {
    const cards = gameState.selectedCards;
    if (cards.length > 0) {
      let allowPlant = true;
      if (gameState.startTrading) {
        alert("Finish trade before planting");
      //Handle planting when beanField is empty
      } else if (state.cardType === "") {
        //Make sure all selected cards are the same type
        const firstCard = cards.at(0);
        for (let i = 0; i < cards.length; i++) {
          if (cards.at(i) !== firstCard) {
            allowPlant = false;
          }
        }
        if (allowPlant) {
          setState({
            ...state,
            cardType: firstCard,
            cardCount: cards.length,
          });
          setGameState({
            ...gameState,
            justPlanted: true,
            selectedCards: [],
          });
        } else {
          alert("All selected cards must match the beanfield");
        }
      //Handle planting when beanField is not empty
      } else {
        //Make sure all selected cards are the same type as the beanField
        for (let i = 0; i < cards.length; i++) {
          if (cards.at(i) !== state.cardType) {
            allowPlant = false;
          }
        }
        if (allowPlant) {
          setState({
            ...state,
            cardCount: state.cardCount + cards.length,
          });
          setGameState({
            ...gameState,
            justPlanted: true,
            selectedCards: [],
          });
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
        left: 50 + state.x + "vw",
        top: 50 + state.y + "vh",
        width: "6.5vw",
        height: state.cardCount + 19.1 + "vw",
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
        for (let i = 0; i < state.cardCount; i++) {
          cards.push(
            <Card
              gameState={gameState}
              setGameState={setGameState}
              type={state.cardType}
              x={0}
              y={5 + i + "vw"}
            />
          );
        }
        return cards;
      })()}

      {(() => {
        const coinImgs = [];
        for (let i = 0; i < state.coinCount; i++) {
          coinImgs.push(
            <img
              id="coinImage"
              alt=""
              src={coinImage}
              style={{
                left: 1.6 * i + "vw",
                top: state.cardCount + 15.5 + "vw",
              }}
            />
          );
        }
        return coinImgs;
      })()}

      <text
        id="coinProgress"
        style={{
          position: "absolute",
          textAlign: "center",
          left: 0,
          width: "6.5vw",
          top: state.cardCount + 14 + "vw",
          height: "1.5vw",
        }}
      >
        {state.cardCount}/{state.coinTarget}
      </text>
      <button
        id="plantButton"
        style={{
          position: "absolute",
          left: 0,
          top: state.cardCount + 17 + "vw",
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
