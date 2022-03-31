import { useState } from "react";
import { Card } from "../Card";
import TableImage from "../../images/TradeTable.png";
import "./trade-table.css";

const TradeTable = (props) => {
  //=====================Initialize tradeTable state=====================
  const [bottomCards, setBottomCards] = useState([]);
  // const [topCards, setTopCards] = useState([]);
  //=====================Handle start trade button=====================
  const startTrading = () => {
    if (props.selectedCards.length > 0) {
      setBottomCards(props.selectedCards);
      props.setTradeStatus("trading");
    }
  }

  //=====================Handle confirm trade button=====================
  const confirmTrade = () => {
    if (bottomCards.length > 0) {
      setBottomCards([]);
      props.setTradeStatus("confirmTrade");
    } else {
      alert("Must add cards to trade table first");
    }
  };

  //=====================Handle cancel trade button=====================
  const cancelTrade = () => {
    if (bottomCards.length > 0) {
      setBottomCards([]);
      props.setTradeStatus("cancelTrade");
    }
  };

  const cards = Array(bottomCards.length).fill().map((card, index) => (
    <Card
      beanType={bottomCards.at(index)}
      highlightedCards={props.highlightedCards}
      justPlanted={props.justPlanted}
      selectedCards={props.selectedCards}
      setHighlightedCards={props.setHighlightedCards}
      setSelectedCards={props.setSelectedCards}
      tradeStatus={props.tradeStatus}
      x={`${2 * index}vw`}
      y="18vw"
    />
  ));

  //=====================Display Trade Table=====================
  return (
    <div className="TradeTable">
      <img id="tableImage" src={TableImage} alt="TableImage" />
      {cards}
      <button id="cancelButton" onClick={cancelTrade}>x</button>
      <button id="tradeButton" onClick={startTrading}>Trade</button>
      <button id="confirmButton" onClick={confirmTrade}>!</button>
    </div>
  );
}

export default TradeTable;
