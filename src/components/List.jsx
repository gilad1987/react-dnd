import React, {Component} from 'react';
import Card from './Card';
import {observer} from "mobx-react";

class List extends Component {

    constructor(props) {
        super(props);
        this.draggState = {};
    }

    onDrag = (eventName, item, index) => {

        if ('handleDragStart' === eventName) {
            let {cards} = this.props;
            cards[index].isDragged = true;
            cards.splice(index, 1, cards[index]);
        }

        if ('handleDragEnd' === eventName) {
            let {cards} = this.props;
            const draggedItem = this.draggState.handleDragStart;
            draggedItem.isDragged = false;
            const draggedItemIndex = cards.indexOf(draggedItem);
            cards.splice(draggedItemIndex, 1, draggedItem);
        }

        if (this.draggState[eventName] === item) {
            return;
        }
        this.draggState[eventName] = item;


        if ('handleDragEnter' === eventName) {
            const draggedItem = this.draggState.handleDragStart;
            const draggedItemIndex = this.props.cards.indexOf(draggedItem);
            const droppedItem = this.draggState.handleDragEnter;
            const droppedItemIndex = this.props.cards.indexOf(droppedItem);
            let {cards} = this.props;

            if (draggedItem === droppedItem) {
                return;
            }

            cards.splice(draggedItemIndex, 1);
            draggedItem.isDragged = true;

            cards.splice(droppedItemIndex, 0, draggedItem);
        }


    };

    render() {
        const cards = this.props.cards.map((item, index) => (
            <Card
                key={item.id}
                item={item}
                index={index}
                onDrag={this.onDrag}
            />
        ));
        return (
            <div className="List" draggable>
                {cards}
            </div>
        );
    }
}



export default observer(List);
