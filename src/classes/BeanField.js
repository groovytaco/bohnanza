import "./BeanField.css";
import Card from '../classes/Card.js';
import FieldImage from "../BeanField.jpg";

function BeanField() {
    return (
        <div className="BeanField">
            <img className="FieldImage" src={FieldImage} alt="FieldImage" />
            <Card className="leftCard" type="coffee" x="-7vw" y="4.5vw" />
            <Card className="rightCard" type="cocoa" x=".5vw" y="4.5vw" />
        </div>
    );
}

export default BeanField;