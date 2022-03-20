import "./PlayerHand.css";
import Card from "../classes/Card.js";

function PlayerHand(props) {
  //initial gameState variables
  let gameState=props.gameState;
  let setGameState=props.setGameState;
  return (
    <div className="pickle-hand">
      <div className="PlayerHand">
        <Card selectable={true} gameState={gameState} setGameState={setGameState} type="chili" id="smart" />
        <Card selectable={true} gameState={gameState} setGameState={setGameState} type="chili" />
        <Card selectable={true} gameState={gameState} setGameState={setGameState} type="chili" />
        <Card selectable={true} gameState={gameState} setGameState={setGameState} type="chili" />
        <Card selectable={true} gameState={gameState} setGameState={setGameState} type="chili" />
        <Card selectable={true} gameState={gameState} setGameState={setGameState} type="chili" />
        <Card selectable={true} gameState={gameState} setGameState={setGameState} type="chili" />
      </div>
    </div>
  );
}

export default PlayerHand;
