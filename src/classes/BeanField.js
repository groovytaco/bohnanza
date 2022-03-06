import "./BeanField.css";
import Card from '../classes/Card.js';
import FieldImage from "../BeanField.jpg";

function BeanField() {
    return (
        <div className="BeanField">
            <img className="FieldImage" src={FieldImage} alt="FieldImage" />
            <Card className="leftCard" type="coffee" x="-140px" y="80px" />
            <Card className="rightCard" type="cocoa" x="10px" y="80px" />
        </div>
    );
}

export default BeanField;