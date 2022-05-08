import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className="f1 tc">
             <h1>Hallihallo0000</h1>
             <p>Willkommen bei mir</p>
             <p>{this.props.greeting}</p> 
            </div>
            
        )
    }
}

export default Hello;

