import "./PlayerHand.css";
import Card from "../classes/Card.js";

function PlayerHand(props) {
  //initial gameState variables
  let gameState = props.gameState;
  let setGameState = props.setGameState;
  return (
    <div className="pickle-hand">
      <div className="PlayerHand">
        <Card
          selectable={true}
          gameStatus={props.gameStatus}
          tradeStatus={props.tradeStatus}
          justPlanted={props.justPlanted}
          selectedCards={props.selectedCards}
          setSelectedCards={props.setSelectedCards}
          highlightedCards={props.highlightedCards}
          setHighlightedCards={props.setHighlightedCards}
          type="chili"
          id="smart"
        />
        <Card
          selectable={true}
          gameStatus={props.gameStatus}
          tradeStatus={props.tradeStatus}
          justPlanted={props.justPlanted}
          selectedCards={props.selectedCards}
          setSelectedCards={props.setSelectedCards}
          highlightedCards={props.highlightedCards}
          setHighlightedCards={props.setHighlightedCards}
          type="chili"
        />
        <Card
          selectable={true}
          gameStatus={props.gameStatus}
          tradeStatus={props.tradeStatus}
          justPlanted={props.justPlanted}
          selectedCards={props.selectedCards}
          setSelectedCards={props.setSelectedCards}
          highlightedCards={props.highlightedCards}
          setHighlightedCards={props.setHighlightedCards}
          type="chili"
        />
      </div>
    </div>
  );
}

export default PlayerHand;
