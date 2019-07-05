import React, { Component } from "react";
import Card from "./Card";

class CardDeck extends Component {
    render() {
        return (
            <div>
                <h1>Deck</h1>
                <Card />
            </div>
        );
    }
}

export default CardDeck;
