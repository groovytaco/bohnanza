import React from 'react';
import cocoa from '../Beans/Cocoa.jpg';
import garden from '../Beans/Garden.jpg';
import red from '../Beans/Red.jpg';
import blackEyed from '../Beans/Black-eyed.jpg';
import soy from '../Beans/Soy.jpg';
import green from '../Beans/Green.jpg';
import stink from '../Beans/Stink.jpg';
import chili from '../Beans/Chili.jpg';
import blue from '../Beans/Blue.jpg';
import wax from '../Beans/Wax.jpg';
import coffee from '../Beans/Coffee.jpg';
import "./Card.css";

function Card(props) {
    var image;
    var highlighted = false;
    var xPos = props.x;
    var yPos = props.y;
    switch (props.type) {
        case "cocoa":
            image = cocoa;
            break;
        case "garden":
            image = garden;
            break;
        case "red":
            image = red;
            break;
        case "blackEyed":
            image = blackEyed;
            break;
        case "soy":
            image = soy;
            break;
        case "green":
            image = green;
            break;
        case "stink":
            image = stink;
            break;
        case "chili":
            image = chili;
            break;
        case "blue":
            image = blue;
            break;
        case "wax":
            image = wax;
            break;
        case "coffee":
            image = coffee;
            break;
        default:
    }
    return (
            <div  className='Card' style={{ left: xPos, top: yPos, }}>
                <img className="bean-image"
                    src={image}
                    alt=""
                    style={{
                        borderStyle: "solid",
                        borderColor: "#fde32c",
                        borderWidth: "5px",
                        borderRadius: "5px"
                    }}>
                </img>
            </div> 
    );
}

export default Card;
