import React, { Component } from "react";

class Card extends Component {
    render() {
        let { info } = this.props;
        return <img src={info.image} alt={`${info.value} OF ${info.suit}`} />;
    }
}

export default Card;
