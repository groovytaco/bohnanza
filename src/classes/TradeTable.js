import "./TradeTable.css";
import Card from "../classes/Card.js";
import TableImage from "../TradeTable.png";
import { useEffect, useState } from 'react';
function TradeTable(props) {
    let gameState=props.gameState;
    let setGameState=props.setGameState;
    const [state, setState] = useState(
        {
          'bottomCards': [],
          'topCards': []
        });
    
    function startTrading()
    {
        setState({
            ...state,
            bottomCards: gameState.selectedCards
        });
    }
    function confirmTrade()
    {
        
    }
    return (
        <div className="TradeTable">
            <img id="tableImage" src={TableImage} alt="TableImage" />
            {(() => {
                const cards = [];
                for (let i = 0; i < state.bottomCards.length; i++) {
                    cards.push(<Card type={state.bottomCards.at(i).type} x={0} y={5 + i + "vw"} />);
                }
                return cards;
            })()}
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