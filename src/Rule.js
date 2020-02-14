import React, { Component } from 'react';
import Rules from './Rules';
import './Rule.css';

class Rule extends Component {
    constructor(props) {
        super(props);
        this.toWord = this.toWord.bind(this);
        this.getRule = this.getRule.bind(this);
    }

    toWord(value) {
        let words = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        let num = parseInt(value, 10);
        if (num) {
            return(words[num - 2]);
        } else {
            return value;
        }  
    }

    getRule(val) {
        for (const prop in Rules) {
            if (val == prop) {
                return Rules[prop]
            }
        }
    }

    render() {
        let word = this.toWord(this.props.val)
        return (
            <div className='Rule'>
                {this.getRule(word)}
            </div>
        )
    }
}

export default Rule;