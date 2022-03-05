import React, { Component } from 'react';
import coffee from '../coffee.png';
import blue from '../blue.png';
import "./Card.css";

class  Card extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            type: ""
        }
    }

    render() { 
        if(this.props.type==="coffee")
        {
            this.image = coffee;
        }else{
            this.image = blue;
        } 
        return (  
            <div className='Card'>
                <h1> {this.props.type}</h1>
                <img className = "bean-image" src={this.image} className="card-image" alt="" />
            </div>
        );
    }
}
 
export default Card;
