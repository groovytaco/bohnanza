import "./TradeTable.css";
import Card from "../classes/Card.js";
import TableImage from "../TradeTable.png";
import { useState } from "react";
function TradeTable(props) {
  //=====================Initialize tradeTable state=====================
  const [bottomCards, setBottomCards] = useState([]);
  const [topCards, setTopCards] = useState([]);
  //=====================Handle start trade button=====================
  function startTrading() {
    if (props.selectedCards.length > 0) {
      setBottomCards(props.selectedCards);
      props.setTradeStatus("trading");
    }
  }
  //=====================Handle confirm trade button=====================
  function confirmTrade() {
    if (bottomCards.length > 0) {
      setBottomCards([]);
      props.setTradeStatus("confirmTrade");
    } else {
      alert("Must add cards to trade table first");
    }
  }
  //=====================Handle cancel trade button=====================
  function cancelTrade() {
    if (bottomCards.length > 0) {
      setBottomCards([]);
      props.setTradeStatus("cancelTrade");
    }
  }
  //=====================Display Trade Table=====================
  return (
    <div className="TradeTable">
      <img id="tableImage" src={TableImage} alt="TableImage" />
      {(() => {
        const cards = [];
        for (let i = 0; i < bottomCards.length; i++) {
          cards.push(
            <Card
              tradeStatus={props.tradeStatus}
              justPlanted={props.justPlanted}
              selectedCards={props.selectedCards}
              setSelectedCards={props.setSelectedCards}
              highlightedCards={props.highlightedCards}
              setHighlightedCards={props.setHighlightedCards}
              type={bottomCards.at(i)}
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
