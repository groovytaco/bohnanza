import "./BeanField.css";
import Card from '../classes/Card.js';
import leftField from "../Images/1stBeanField.PNG";
import rightField from "../Images/2ndBeanField.PNG";
//import { useState } from 'react';

function BeanField(props) {
    //initialize variable based on beanField properties
    let x = props.x;
    let y = props.y;
    let cardType = props.type;
    let cardCount = props.cardCount;

    //initialize fieldImage based on fieldNum
    let fieldImage;
    if (props.fieldNum === 1) {
        fieldImage = leftField;
    } else if (props.fieldNum === 2) {
        fieldImage = rightField;
    }

    //initialize coinReq based on bean type
    let temp = [null];
    switch (cardType) {
        case "cocoa":
            temp = [2, 2, 3, 4];
            break;
        case "garden":
            temp = [2, 2, 3];
            break;
        case "red":
            temp = [2, 3, 4, 5];
            break;
        case "blackEyed":
            temp = [2, 4, 5, 6];
            break;
        case "soy":
            temp = [2, 4, 6, 7];
            break;
        case "green":
            temp = [3, 5, 6, 7];
            break;
        case "stink":
            temp = [3, 5, 7, 8];
            break;
        case "chili":
            temp = [3, 6, 8, 9];
            break;
        case "blue":
            temp = [4, 6, 8, 10];
            break;
        case "wax":
            temp = [4, 7, 9, 11];
            break;
        case "coffee":
            temp = [4, 7, 10, 12];
            break;
        default:

    }
    let coinReq = temp

    //set coinCount based on cardCount and beanType
    let coinCount = 0;
    while (cardCount >= coinReq.at(coinCount) && coinCount < coinReq.length) {
        coinCount++;
    }

    //set coinTarget based on coinCount and beanType
    let coinTarget = 0;
    if (coinCount < coinReq.length) {
        coinTarget = coinReq.at(coinCount)
    } else {
        coinTarget = coinReq.at(coinReq.length - 1)
    }
    function harvest() {

    }
    return (
        <div className="BeanField">
            <button id="harvestButton" 
            style={{position:"absolute", left: x+"vw", bottom: 0, width: "6.5vw", height: "2vw" }}
            onClick={harvest}>
                Harvest
            </button>
            <img id="fieldImage" alt="" src={fieldImage} style={{ left: x + "vw", top: y + "vw" }} />
            {(() => {
                const cards = [];
                for (let i = 0; i < cardCount; i++) {
                    cards.push(<Card type={cardType} x={x + "vw"} y={y + 3 + i + "vw"} />);
                }
                return cards;
            })()}
            <text id="coinProgress" style={{ position: "absolute", textAlign: "center", left: x + "vw", width: "6.5vw", top: y + cardCount + 12.5 + "vw" }}>
                {cardCount}/{coinTarget}
            </text>
        </div>
    );
}

export default BeanField;