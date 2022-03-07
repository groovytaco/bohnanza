import React from "react";
import BeanField from '../classes/BeanField.js';
import Deck from '../classes/Deck.js';
import InfoCard from '../classes/InfoCard.js';
import TradeTable from '../classes/TradeTable.js';
import PlayerHand from '../classes/PlayerHand.js';
import "./ActiveGame.css";

function ActiveGame() {
  return (
      <div className="Active-game">
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <Deck/>
            <TradeTable/>
            <BeanField/>
            <PlayerHand/>
            <button className="Next-turn"
                title="NextTurn"
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "4vw",
                    height: "4vw"
                }}
            ></button>
        </div>
  );
}

export default ActiveGame;