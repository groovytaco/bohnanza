import "./Deck.css";
import DeckImage from "../Deck.jpg";
import Card from "./Card";

function Deck(props) {
    var coffeeNum = 24;
    var waxNum = 22;
    var blueNum = 20;
    var chiliNum = 18;
    var stinkNum = 16;
    var greenNum = 14;
    var soyNum = 12;
    var blackEyedNum = 10;
    var redNum = 8;
    var gardenNum = 6;
    var cocoaNum = 4;
    var leftBean = "coffee";
    var rightBean = "chili";
    function deckClicked()
    {
        if(props.gameStatus === "PlantSecondOrFlip2")
        {
            props.changeGameStatus("Flipped2Cards");
        }
    }
    return (
        <div className="Deck" onClick={deckClicked}>
            <img className="DeckImage" src={DeckImage} alt="DeckImage" />
            <Card type = {leftBean} x="15vw" y="1vw"/>
            <Card type = {rightBean} x="25vw" y="1vw"/>
        </div>
    );
}

export default Deck;