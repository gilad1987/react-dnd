import React, {Component} from 'react';
import Card from './Card';
import {observable, decorate} from "mobx";
import {observer} from "mobx-react";

class List extends Component {

    cards = null;

    constructor(props) {
        super(props);
        this.draggState = {};
        this.cards = this.props.cards;
    }

    reOrderItem = (eventName, item, itemIndex) => {
        if (this.draggState[eventName] === item) {
            return;
        }

        this.draggState[eventName] = item;

        if ('handleDragEnter' === eventName) {
            const dragStartItem = this.draggState.handleDragStart;
            const dragStartItemIndex = this.cards.indexOf(dragStartItem);
            const dragEnterItem = this.draggState.handleDragEnter;
            const dragEnterItemIndex = this.cards.indexOf(dragEnterItem);

            if (dragStartItem === dragEnterItem) {
                return;
            }

            let newCardsOrder = this.cards.slice();
            newCardsOrder.splice(dragStartItemIndex, 1);
            newCardsOrder.splice(Math.max(0, dragEnterItemIndex), 0, dragStartItem);
            this.cards = newCardsOrder;
        }
    };

    render() {
        const cards = this.cards.map((item, index) => (
            <Card key={item.id} item={item} index={index} onDragg={this.reOrderItem}/>));
        return (
            <div className="List">
                {cards}
            </div>
        );
    }
}

decorate(List, {
    cards: observable,
});

export default observer(List);
