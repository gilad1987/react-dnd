import React, {Component} from 'react';
import './App.css';
import Card from "./components/Card";
import {observable, action, decorate} from "mobx";
import {observer} from "mobx-react";

class App extends React.Component {

    cards = [1,2,3,4,5,6,7,8,9];


    constructor(props) {
        super(props);
        this.draggState = {};
    }

    getCards = () => {
        return this.cards;
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    onDragg = (eventName, item) => {
        if (this.draggState[eventName] === item) {
            return;
        }

        this.draggState[eventName] = item;

        if ('handleDragEnter' === eventName) {
            const dragStartItem = this.draggState.handleDragStart;
            const dragStartItemIndex = this.cards.indexOf(dragStartItem);
            const dragEnterItem = this.draggState.handleDragEnter;
            const dragEnterItemIndex = this.cards.indexOf(dragEnterItem);
            let newCardsOrder = this.cards.slice();
            newCardsOrder.splice(dragStartItemIndex, 1);
            newCardsOrder.splice(Math.max(0, dragEnterItemIndex - 1), 0, dragStartItem);
            this.cards = newCardsOrder;
        }
    };


    render() {
        console.log('app render');
        const cards = this.cards.map(item => (<Card key={item} item={item} onDragg={this.onDragg}/>));

        return (
            <div className="App">
                {cards}
            </div>
        );
    }
}

decorate(App, {
    cards: observable,
    onDragg: action,
    componentDidMount: action,
});

export default observer(App);
