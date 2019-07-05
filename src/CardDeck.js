import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import "./CardDeck.css";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

class CardDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckId: "",
            cards: [],
            remaining: 52
        };
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({
            deckId: deck.data.deck_id,
            remaining: deck.data.remaining
        });
    }

    async handleClick() {
        let id = this.state.deckId;
        try {
            let cardUrl = `${API_BASE_URL}${id}/draw/?count=1`;
            let cardRes = await axios.get(cardUrl);
            if (!cardRes.data.success) {
                throw new Error("No cards remaining");
            }
            this.setState({
                cards: [...this.state.cards, cardRes.data.cards[0]],
                remaining: cardRes.data.remaining
            });
        } catch (err) {
            alert(err);
        }
    }

    render() {
        return (
            <div className="CardDeck">
                <h1>Card Dealer</h1>
                <button onClick={this.handleClick}>Deal a card</button>
                <div className="CardDeck-pile">
                    {this.state.cards.map(card => (
                        <Card info={card} key={card.code} />
                    ))}
                </div>
                {console.log(this.state)}
            </div>
        );
    }
}

export default CardDeck;
