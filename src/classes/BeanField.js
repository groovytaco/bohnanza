import "./BeanField.css";
import Card from "../classes/Card.js";
import leftField from "../Images/1stBeanField.PNG";
import rightField from "../Images/2ndBeanField.PNG";
import coinImage from "../Images/coin.jpg";
import { useEffect, useState } from 'react';

function BeanField(props) {
  //initial gameState variables
  let gameState = props.gameState;
  let setGameState = props.setGameState;
  //initialize fieldImage based on fieldNum
  let fieldImage;
  if (props.fieldNum === 1) {
    fieldImage = leftField;
  } else if (props.fieldNum === 2) {
    fieldImage = rightField;
  }
  //initialize coinReq based on bean type
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
  //set coinCount based on cardCount and beanType
  let i = 0;
  while (props.cardCount >= temp.at(i) && i < temp.length) {
    i++;
  }
  let coinCount = i;
  //set coinTarget based on coinCount and beanType
  let coinTarget = 0;
  if (coinCount < temp.length) {
    coinTarget = temp.at(coinCount)
  } else {
    coinTarget = temp.at(temp.length - 1)
  }
  //initialize state variables based on props
  const [state, setState] = useState(
    {
      'x': props.x,
      'y': props.y,
      'cardType': props.type,
      'cardCount': props.cardCount,
      'addCoins': props.addCoins,
      'fieldNum': props.fieldNum,
      'coinReq': temp,
      'coinCount': coinCount,
      'coinTarget': coinTarget
    }
  );

  useEffect(() => {
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
    let i = 0;
    while (state.cardCount >= temp.at(i) && i < temp.length) {
      i++;
    }
    let coinCount = i;
    //set coinTarget based on coinCount and beanType
    let coinTarget = 0;
    if (coinCount < temp.length) {
      coinTarget = temp.at(coinCount)
    } else {
      coinTarget = temp.at(temp.length - 1)
    }
    if(state.cardType===""){
      coinCount=0;
      coinTarget=0;
    }
    setState({
      ...state,
      coinReq: temp,
      coinCount: coinCount,
      coinTarget: coinTarget
    });
  }, [state.cardType,state.cardCount])
  
  
  function harvest() {
    //update player coin total
    setGameState({
      ...gameState,
      myCoinCount: gameState.myCoinCount + state.coinCount
    });
    //reset beanfield to empty
    setState({
      ...state,
      cardType: "",
      cardCount: 0
    });
  }
  function plant() {
    //reset beanfield to empty
    const cards = gameState.selectedCards;
    let allowPlant = true;
    if (state.cardType === "") {
      const firstCard = cards.at(0).type;
      for (let i = 0; i < cards.length; i++) {
        if (cards.at(i).type !== firstCard) {
          allowPlant = false;
        }
      }
      if (allowPlant) {
        setState({
          ...state,
          cardType: firstCard,
          cardCount: cards.length
        });
        setGameState({
          ...gameState,
          selectedCards: []
        });
      } else {
        alert("All selected cards must match the beanfield")
      }
    } else {
      for (let i = 0; i < cards.length; i++) {
        if (cards.at(i).type !== state.cardType) {
          allowPlant = false;
        }
      }
      if (allowPlant) {
        setState({
          ...state,
          cardCount: state.cardCount + cards.length
        });
        setGameState({
          ...gameState,
          selectedCards: []
        });
      } else {
        alert("All selected cards must match the beanfield")
      }
    }



  }

  return (
    <div className="BeanField" style={{ position: "absolute", left: 50 + state.x + "vw", top: 50 + state.y + "vh", width: "6.5vw", height: state.cardCount + 19.1 + "vw" }}>
      <button id="harvestButton"
        style={{ position: "absolute", left: 0, top: 0, width: "6.5vw", height: "2vw" }}
        onClick={harvest}>
        Harvest
      </button>

      <img id="fieldImage" alt="" src={fieldImage} style={{ left: 0, top: 2 + "vw" }} />
      {(() => {
        const cards = [];
        for (let i = 0; i < state.cardCount; i++) {
          cards.push(<Card type={state.cardType} x={0} y={5 + i + "vw"} />);
        }
        return cards;
      })()}

      {(() => {
        const coinImgs = [];
        for (let i = 0; i < state.coinCount; i++) {
          coinImgs.push(<img id="coinImage" alt="" src={coinImage} style={{ left: 1.6 * i + "vw", top: state.cardCount + 15.5 + "vw" }} />);
        }
        return coinImgs;
      })()}

      <text id="coinProgress" style={{ position: "absolute", textAlign: "center", left: 0, width: "6.5vw", top: state.cardCount + 14 + "vw", height: "1.5vw" }}>
        {state.cardCount}/{state.coinTarget}
      </text>
      <button id="plantButton"
        style={{ position: "absolute", left: 0, top: state.cardCount + 17 + "vw", width: "6.5vw", height: "2vw" }}
        onClick={plant}>
        Plant
      </button>
    </div>
  );
}

export default BeanField;
