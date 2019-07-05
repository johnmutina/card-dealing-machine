import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
    constructor(props) {
        super(props);
        let rotation = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${rotation}deg)`;
    }
    render() {
        return (
            <img
                src={this.props.info.image}
                alt={`${this.props.info.value} OF ${this.props.info.suit}`}
                className="Card"
                style={{ transform: this._transform }}
            />
        );
    }
}

export default Card;
