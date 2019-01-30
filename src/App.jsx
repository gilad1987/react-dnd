import React from 'react';
import './App.css';

import List from "./components/List";

class App extends React.Component {

    cards = [
        {id: this.getRandomInt(0, 60000000), height: this.getRandomInt(30, 90)},
        {id: this.getRandomInt(0, 60000000), height: this.getRandomInt(30, 90)},
        {id: this.getRandomInt(0, 60000000), height: this.getRandomInt(30, 90)},
        {id: this.getRandomInt(0, 60000000), height: this.getRandomInt(30, 90)},
        {id: this.getRandomInt(0, 60000000), height: this.getRandomInt(30, 90)},
        {id: this.getRandomInt(0, 60000000), height: this.getRandomInt(30, 90)},
        {id: this.getRandomInt(0, 60000000), height: this.getRandomInt(30, 90)},
        {id: this.getRandomInt(0, 60000000), height: this.getRandomInt(30, 90)},
        {id: this.getRandomInt(0, 60000000), height: this.getRandomInt(30, 90)},
        {id: this.getRandomInt(0, 60000000), height: this.getRandomInt(30, 90)},
    ];

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <div className="App">
                <List cards={this.cards}/>
            </div>
        );
    }
}



export default (App);
