import React from 'react';
import './App.css';

import List from "./components/List";
import {observable} from "mobx";
import uuidv4 from 'uuid/v4';
import {observer} from "mobx-react";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let list1 = {
    id: uuidv4(),
    isDragged: false,
    number: 1,
    cards: observable([
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
    ])
};

let list2 = {
    id: uuidv4(),
    number: 2,
    isDragged: false,
    cards: observable([
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
    ])
};
let list3 = {
    id: uuidv4(),
    number: 3,
    isDragged: false,
    cards: observable([
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
        {id: uuidv4(), height: getRandomInt(30, 90), placeholder: false, isDragged: false,},
    ])
};
const lists = observable([list1, list2, list3]);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.draggState = {};
    }

    onDrag = (eventName, item, index) => {
        if ('handleDragStart' === eventName) {
            let cards = lists;
            cards[index].isDragged = true;
            cards.splice(index, 1, cards[index]);
        }

        if ('handleDragEnd' === eventName) {
            let cards = lists;
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
            const draggedItemIndex = lists.indexOf(draggedItem);
            const droppedItem = this.draggState.handleDragEnter;
            const droppedItemIndex = lists.indexOf(droppedItem);
            let cards = lists;

            if (draggedItem === droppedItem) {
                return;
            }

            cards.splice(draggedItemIndex, 1);
            draggedItem.isDragged = true;

            cards.splice(droppedItemIndex, 0, draggedItem);
        }
    };

    render() {
        return (
            <div className="App">
                {lists.map((list, index) => <List key={list.id}
                                                  cards={list.cards}
                                                  item={list}
                                                  index={index}
                                                  number={list.number}
                                                  onDrag={this.onDrag}/>)}
            </div>
        );
    }
}

export default observer(App);
