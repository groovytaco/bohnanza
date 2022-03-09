import "./BeanField.css";
import Card from '../classes/Card.js';
import leftField from "../Images/1stBeanField.PNG";
import rightField from "../Images/2ndBeanField.PNG";
import { useState } from 'react';

function BeanField(props) {
    let x = props.x;
    let y = props.y;
    let cardType = props.type;
    const [cardNum, setCardNum] = useState(props.cardNum)
    const [coinNum, setCoinNum] = useState(2)
    let temp = [null];
    let fieldImage;
    if (props.fieldNum === 1) {
        fieldImage = leftField;
    } else if (props.fieldNum === 2) {
        fieldImage = rightField;
    }
    switch (cardType) {
        case "cocoa":
            temp = [2, 2, 3, 4];
            break;
        case "garden":
            temp = [2, 2, 3, 100];
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
    const [coinReq, setCoinReq] = useState(temp)
    return (
        <div className="BeanField">
            <img className="fieldImage" src={fieldImage} alt="" style={{ left: x + "vw", top: y + "vw" }} />
            {(() => {
                const cards = [];
                for (let i = 0; i < cardNum; i++) {
                    cards.push(<Card type={cardType} x={x + "vw"} y={y + 3 + i + "vw"} />);
                }
                return cards;
            })()}
            <text id="coinProgress" style={{ position: "absolute", textAlign: "center", left: x + "vw", width: "6.5vw", top: y + cardNum + 12.5 + "vw"}}>
                {cardNum}/{coinReq.at(coinNum)}
            </text>
        </div>
    );
}

export default BeanField;