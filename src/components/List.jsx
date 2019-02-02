import React, {Component} from 'react';
import Card from './Card';
import {observer} from "mobx-react";
import Draggable from "../dragable.abstract";
import classnames from "classnames";

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
        const className = classnames('List', {isDragged: this.props.item.isDragged});

        const cards = this.props.cards.map((item, index) => (
            <Card
                key={item.id}
                item={item}
                index={index}
                onDrag={this.onDrag}
            />
        ));
        return (
            <div className={className} draggable ref={ref => this.ref = ref}>
                <div className="List-title">List number: {this.props.number}</div>
                {this.props.item.isDragged ? cards : cards}
            </div>
        );
    }
}


export default observer(List);
