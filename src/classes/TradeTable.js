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
            <button id="tradeButton" 
            style={{position:"absolute", left: 0, bottom: 0, width: "20vw", height: "2vw" }}
            onClick={startTrading}>
                Trade
            </button>
            <button id="confirmButton" 
            style={{position:"absolute", left: 0, bottom: 0, width: "2.25vw", height: "2vw" }}
            onClick={confirmTrade}>
                !
            </button>
            
        </div>
    );
}

export default TradeTable;