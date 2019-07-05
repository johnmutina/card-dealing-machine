import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

class CardDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckId: "",
            cards: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios
            .get("https://deckofcardsapi.com/api/deck/new/shuffle/")
            .then(response => {
                this.setState({
                    deckId: response.data.deck_id
                });
            });
    }

    handleClick() {
        axios
            .get(
                `https://deckofcardsapi.com/api/deck/${
                    this.state.deckId
                }/draw/?count=1`
            )
            .then(response => {
                this.setState({
                    cards: [...this.state.cards, response.data.cards[0]]
                });
            });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Deal a card</button>
                <div>
                    {this.state.cards.map(card => (
                        <Card info={card} key={card.code} />
                    ))}
                </div>
            </div>
        );
    }
}

export default CardDeck;
