import "./TradeTable.css";
import Card from "../classes/Card.js";
import TableImage from "../TradeTable.png";
import { useEffect, useState } from "react";
function TradeTable(props) {
  //=====================Initialize tradeTable state=====================
  let gameState = props.gameState;
  let setGameState = props.setGameState;
  const [state, setState] = useState({
    bottomCards: [],
    topCards: [],
  });
  //=====================Handle start trade button=====================
  function startTrading() {
    if (gameState.selectedCards.length > 0) {
      setState({
        ...state,
        bottomCards: gameState.selectedCards,
      });
      setGameState({
        ...gameState,
        tradeStatus: "trading",
        startedTrade: true,
      });
    }
  }
  //=====================Handle confirm trade button=====================
  function confirmTrade() {
    if (state.bottomCards.length > 0) {
      setState({
        ...state,
        bottomCards: []
      });
      setGameState({
        ...gameState,
        tradeStatus: "confirmTrade",
        startedTrade: false,
        finishTrade: true,
      });
    } else {
      alert("Must add cards to trade table first");
    }
  }
  //=====================Handle cancel trade button=====================
  function cancelTrade() {
    if (state.bottomCards.length > 0) {
      setState({
        ...state,
        bottomCards: [],
      });
      setGameState({
        ...gameState,
        tradeStatus: "cancelTrade",
        startedTrade: false,
        cancelTrade: true,
      });
    }
  }
  //=====================Display Trade Table=====================
  return (
    <div className="TradeTable">
      <img id="tableImage" src={TableImage} alt="TableImage" />
      {(() => {
        const cards = [];
        for (let i = 0; i < state.bottomCards.length; i++) {
          cards.push(
            <Card
              gameState={gameState}
              setGameState={setGameState}
              type={state.bottomCards.at(i)}
              x={2 * i + "vw"}
              y={"18vw"}
            />
          );
        }
        return cards;
      })()}
      <button id="cancelButton" onClick={cancelTrade}>
        x
      </button>
      <button id="tradeButton" onClick={startTrading}>
        Trade
      </button>
      <button id="confirmButton" onClick={confirmTrade}>
        !
      </button>
    </div>
  );
}

export default TradeTable;
