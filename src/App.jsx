import React from 'react';
import './App.css';

import List from "./components/List";
import {observable} from "mobx";
import uuidv4 from 'uuid/v4';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let list1 = {
    id: uuidv4(),
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
const lists = [list1, list2, list3];

class App extends React.Component {
    render() {
        return (
            <div className="App">
                {lists.map((list, index) => <List key={list.id} cards={list.cards} index={index}/>)}
            </div>
        );
    }
}

export default App;
