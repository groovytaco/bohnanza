import "./BeanField.css";
import Card from '../classes/Card.js';
import FieldImage from "../BeanField.jpg";
import { useState } from 'react';

function BeanField(props) {
    var x = props.x;
    var y = props.y;
    var cardType = props.type;
    const [cardNum, setCardNum] = useState(0)
    var temp =[null];
    switch (cardType) {
        case "cocoa":
            temp = [2,2,3,4];
            break;
        case "garden":
            temp = [2,2,3,100];
            break;
        case "red":
            temp = [2,3,4,5];
            break;
        case "blackEyed":
            temp = [2,4,5,6];
            break;
        case "soy":
            temp = [2,4,6,7];
            break;
        case "green":
            temp = [3,5,6,7];
            break;
        case "stink":
            temp = [3,5,7,8];
            break;
        case "chili":
            temp = [3,6,8,9];
            break;
        case "blue":
            temp = [4,6,8,10];
            break;
        case "wax":
            temp = [4,7,9,11];
            break;
        case "coffee":
            temp = [4,7,10,12];
            break;
        default:
            
    }
    const [coinReq, setCoinReq] = useState(temp)
    return (
        <div className="BeanField">
            <Card type={cardType} x={x} y={y} />
        </div>
    );
}

export default BeanField;