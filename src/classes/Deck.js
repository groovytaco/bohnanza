import "./Deck.css";
import DeckImage from "../Deck.jpg";

function Deck() {
    return (
        <div className="Deck">
            <img className="DeckImage" src={DeckImage} alt="DeckImage" />
        </div>
    );
}

export default Deck;