import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

const API_BASE = "https://deckofcardsapi.com/api/deck/";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckId: '',
            remaining: '',
            cards: []
        }
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        axios.get(`${API_BASE}new/shuffle/?deck_count=1`).then(response => {
            this.setState({
                deckId: response.data.deck_id,
                remaining: response.data.remaining
            })
        })
    }

    draw() {
        if (this.state.remaining < 1) {
            alert ("No cards left");
        } else {
            axios.get(`${API_BASE}${this.state.deckId}/draw/?count=1`).then(response => {
                let newCard = response.data.cards[0];
                this.setState(st => ({
                    remaining: response.data.remaining,
                    cards: [
                        ...st.cards,
                       { 
                            id: newCard.code,
                            imgSrc: newCard.image,
                            alt: `${newCard.value} of ${newCard.suit}`,
                            value: newCard.value
                        }
                    ]
                }))
            })
        }
    }

    render() {
        return (
            <div className='Deck'>
                <h1 className='Deck-title'>King's Cup</h1>
                <h2 className='Deck-title subtitle'>Built with React</h2>
                <button className='Deck-button' onClick={this.draw}>Draw a Card</button>
                <div className='Deck-cardstack'>
                    {this.state.cards.map(card => (
                        <Card 
                            key={card.id}
                            imgSrc={card.imgSrc}
                            alt={card.alt}
                            val={card.value}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Deck;