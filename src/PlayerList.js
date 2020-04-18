import React, { Component } from 'react';
import './PlayerList.css';

class PlayerList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            players: ['Bob', 'Alice', 'Max'],
            newPlayer: '' 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ 
            players: [...this.state.players, this.state.newPlayer],
            newPlayer: '' 
        })
    }

    handleChange(e) {
        this.setState(
            { newPlayer: e.target.value }
        )
    }

    render() {
        return (
            <div className='PlayerList'>
                <h1>Players</h1>
                <div className='PlayerList-names'>
                    <ul>
                        {this.state.players.map((player) => (
                            <li>{player}</li>
                        ))}
                    </ul>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input 
                            type='text'
                            value={this.state.newPlayer} 
                            onChange={this.handleChange} 
                        />
                    </label>
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default PlayerList;