import "./Deck.css";
import DeckImage from "../Images/Deck.jpg";
import { useState } from 'react';
import Card from "./Card";

function Deck(props) {
    //add all cards to deck
    let temp = [null];
    for (let i = 0; i < 24; i++) {
        temp.push("coffee");
    }
    for (let i = 0; i < 22; i++) {
        temp.push("wax");
    }
    for (let i = 0; i < 20; i++) {
        temp.push("blue");
    }
    for (let i = 0; i < 18; i++) {
        temp.push("chili");
    }
    for (let i = 0; i < 16; i++) {
        temp.push("stink");
    }
    for (let i = 0; i < 14; i++) {
        temp.push("green");
    }
    for (let i = 0; i < 12; i++) {
        temp.push("soy");
    }
    for (let i = 0; i < 10; i++) {
        temp.push("blackEyed");
    }
    for (let i = 0; i < 8; i++) {
        temp.push("red");
    }
    for (let i = 0; i < 6; i++) {
        temp.push("garden");
    }
    for (let i = 0; i < 5; i++) {
        temp.push("cocoa");
    }
    //shuffle deck
    for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * temp.length));
        let location2 = Math.floor((Math.random() * temp.length));
        let tmp = temp[location1];
        temp[location1] = temp[location2];
        temp[location2] = tmp;
    }

    //initialize deck and both flipped beans
    const [deck, setDeck] = useState(temp);
    const [leftBean, setLeftBean] = useState("");
    const [rightBean, setRightBean] = useState("");

    //initialize functions
    function shuffle(deckArray) {
        // for 1000 turns
        // switch the values of two random cards
        for (let i = 0; i < 1000; i++) {
            let location1 = Math.floor((Math.random() * deckArray.length));
            let location2 = Math.floor((Math.random() * deckArray.length));
            let tmp = deckArray[location1];

            deckArray[location1] = deckArray[location2];
            deckArray[location2] = tmp;
        }
        setDeck(deck);
    }
    let deckBoxShadow = "";
    if(props.gameStatus==="PlantSecondOrFlip2")
    {
        deckBoxShadow="0 0 0 0.3vw #fde32c"
    }else{
        deckBoxShadow="0 0 0 0px #fde32c"
    }
    function deckClicked() {
        if (props.gameStatus === "PlantSecondOrFlip2") {
            if (deck.length >= 0) {
                setLeftBean(deck.at(deck.length - 1))
                deck.pop()
                setRightBean(deck.at(deck.length - 1))
                deck.pop()
                setDeck(deck)
            } else if (deck.length === 1) {
                setLeftBean(deck.at(deck.length - 1))
                deck.pop()
                setRightBean("null")
            } else {

            }
            props.changeGameStatus("Flipped2Cards");
        }
    }

    return (
        <div className="Deck" onClick={deckClicked}>
            <img id="DeckImage" style={{boxShadow: deckBoxShadow}} src={DeckImage} alt="DeckImage" />
            <Card id="leftBean" highlighted={true} type={leftBean} x="15vw" y="1vw" />
            <Card id="rightBean" highlighted={true} type={rightBean} x="25vw" y="1vw" />
        </div>
    );
}

export default Deck;