import {Component} from 'react';

export default class Draggable extends Component {

    componentDidMount() {
        this.ref.addEventListener('dragstart', this.handleDragStart, false);
        this.ref.addEventListener('dragenter', this.handleDragEnter, false)
        this.ref.addEventListener('dragover', this.handleDragOver, false);
        this.ref.addEventListener('dragleave', this.handleDragLeave, false);
        this.ref.addEventListener('drop', this.handleDrop, false);
        this.ref.addEventListener('dragend', this.handleDragEnd, false);
    }

    handleDragStart = (e) => {
        this.props.onDragg('handleDragStart', this.props.item);
        this.ref.classList.add('drag-start');
    };
    handleDragEnter = (e) => {
        this.props.onDragg('handleDragEnter', this.props.item);
    };
    handleDragOver = (e) => {
        this.props.onDragg('handleDragOver', this.props.item);
    };
    handleDragLeave = (e) => {
        this.props.onDragg('handleDragLeave', this.props.item);
    };
    handleDrop = (e) => {
        this.props.onDragg('handleDrop', this.props.item);
    };
    handleDragEnd = (e) => {
        this.props.onDragg('handleDragEnd', this.props.item);
        setTimeout(()=>this.ref.classList.remove('drag-start'),750);
    };
}
