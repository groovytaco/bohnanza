import "./TradeTable.css";
import TableImage from "../TradeTable.png";
function TradeTable() {
    function startTrading()
    {
        
    }
    function confirmTrade()
    {
        
    }
    return (
        <div className="TradeTable">
            <img id="tableImage" src={TableImage} alt="TableImage" />
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