import "./PlayerHand.css";
import Card from "../classes/Card.js";

function PlayerHand() {
  return (
    <div className="pickle-hand">
      <div className="PlayerHand">
        <Card type="chili" id="smart" />
        <Card type="chili" />
        <Card type="chili" />
        <Card type="chili" />
        <Card type="chili" />
        <Card type="chili" />
        <Card type="chili" />
      </div>
    </div>
  );
}

export default PlayerHand;
