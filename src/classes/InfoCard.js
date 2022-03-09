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
    //initialize player info with server data
    let username = props.username;
    let leftBeanType = props.leftBeanType;
    let leftCardCount = props.leftCardCount;
    let rightBeanType = props.rightBeanType;
    let rightCardCount = props.rightCardCount;
    //set image and coinReq based on beanType
    let leftImage;
    let leftCoinReq;
    let rightImage;
    let rightCoinReq;
    switch (leftBeanType) {
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
    switch (rightBeanType) {
        case "cocoa":
            rightImage = cocoa;
            rightCoinReq = [2,2,3,4];
            break;
        case "garden":
            rightImage = garden;
            rightCoinReq = [2,2,3,100];
            break;
        case "red":
            rightImage = red;
            rightCoinReq = [2,3,4,5];
            break;
        case "blackEyed":
            rightImage = blackEyed;
            rightCoinReq = [2,4,5,6];
            break;
        case "soy":
            rightImage = soy;
            rightCoinReq = [2,4,6,7];
            break;
        case "green":
            rightImage = green;
            rightCoinReq = [3,5,6,7];
            break;
        case "stink":
            rightImage = stink;
            rightCoinReq = [3,5,7,8];
            break;
        case "chili":
            rightImage = chili;
            rightCoinReq = [3,6,8,9];
            break;
        case "blue":
            rightImage = blue;
            rightCoinReq = [4,6,8,10];
            break;
        case "wax":
            rightImage = wax;
            rightCoinReq = [4,7,9,11];
            break;
        case "coffee":
            rightImage = coffee;
            rightCoinReq = [4,7,10,12];
            break;
        default:
            
    }
    //set coinCount based on cardCount and beanType
    let leftCoinCount = 0;
    let rightCoinCount = 0;
    while(leftCardCount>=leftCoinReq.at(leftCoinCount))
    {
        leftCoinCount++;
    }
    while(rightCardCount>=rightCoinReq.at(rightCoinCount))
    {
        rightCoinCount++;
    }

    return (
        <div className="InfoCard">
            <text id="usernameText">
                {username}
            </text>
            <img id="leftCardImage" src={leftImage} alt="leftImage" />
            <text id="coinProgressLeft">
                {leftCardCount}/{leftCoinReq.at(leftCoinCount)}
            </text>
            <img id="rightCardImage" src={rightImage} alt="rightImage" />
            <text id="coinProgressRight">
                {rightCardCount}/{rightCoinReq.at(rightCoinCount)}
            </text>
        </div>
    );
}

export default InfoCard;