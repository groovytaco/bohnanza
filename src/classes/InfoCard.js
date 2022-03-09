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
import "./InfoCard.css";
function InfoCard(props) {
    var leftBeanType = props.leftBeanType;
    var leftCardCount = props.leftCardCount;
    var rightBeanType = props.rightBeanType;
    var rightCardCount = props.rightCardCount;
    var leftImage;
    var leftCoinReq;
    var rightImage;
    var rightCoinReq;
    switch (leftCardType) {
        case "cocoa":
            leftImage = cocoa;
            leftCoinReq = [2,2,3,4];
            break;
        case "garden":
            leftImage = garden;
            leftCoinReq = [2,2,3,100];
            break;
        case "red":
            leftImage = red;
            leftCoinReq = [2,3,4,5];
            break;
        case "blackEyed":
            leftImage = blackEyed;
            leftCoinReq = [2,4,5,6];
            break;
        case "soy":
            leftImage = soy;
            leftCoinReq = [2,4,6,7];
            break;
        case "green":
            leftImage = green;
            leftCoinReq = [3,5,6,7];
            break;
        case "stink":
            leftImage = stink;
            leftCoinReq = [3,5,7,8];
            break;
        case "chili":
            leftImage = chili;
            leftCoinReq = [3,6,8,9];
            break;
        case "blue":
            leftImage = blue;
            leftCoinReq = [4,6,8,10];
            break;
        case "wax":
            leftImage = wax;
            leftCoinReq = [4,7,9,11];
            break;
        case "coffee":
            leftImage = coffee;
            leftCoinReq = [4,7,10,12];
            break;
        default:
            
    }
    
    return (
        <div className="InfoCard">
            
        </div>
    );
}

export default InfoCard;