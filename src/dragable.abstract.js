import {Component} from 'react';

export default class Draggable extends Component {

    offsetX = 0;
    offsetY = 0;

    clientX = 0;
    clientY = 0;

    componentDidMount = () => {
        this.attachEvents(this.ref);
    }

    attachEvents = (element) => {
        element.addEventListener('dragstart', this.handleDragStart, false);
        element.addEventListener('dragenter', this.handleDragEnter, false);
        element.addEventListener('dragover', this.handleDragOver, false);
        element.addEventListener('dragleave', this.handleDragLeave, false);
        element.addEventListener('drop', this.handleDrop, false);
        element.addEventListener('dragend', this.handleDragEnd, false);
        element.addEventListener('drag', this.handleDrag, false);
    }

    handleDragStart = (event) => {

        const clone = event.target.cloneNode(true);
        const dragImage = document.createElement('div');
        this.clone = dragImage;
        clone.classList.add("dragging");
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
        clone.style.width = event.target.offsetWidth + 'px';

        clone.style.height = event.target.offsetHeight + 'px';
        event.dataTransfer.effectAllowed = 'move';
        dragImage.appendChild(clone);
        dragImage.setAttribute('style', `position: absolute; left: ${-1000}px; top: ${-1000}px;`);
        document.body.appendChild(dragImage);
        // document.body.appendChild(clone);
        event.dataTransfer.setDragImage(dragImage, this.offsetX, this.offsetY);


        this.props.onDrag('handleDragStart', this.props.item, this.props.index);
    };
    handleDragEnter = (event) => {

        this.props.onDrag('handleDragEnter', this.props.item, this.props.index);
    };
    handleDragOver = (event) => {
        this.props.onDrag('handleDragOver', this.props.item, this.props.index);
    };
    handleDragLeave = (event) => {
        this.props.onDrag('handleDragLeave', this.props.item, this.props.index);
    };
    handleDrop = (event) => {
        this.props.onDrag('handleDrop', this.props.item, this.props.index);
    };
    handleDragEnd = (event) => {
        if (this.clone) {
            this.clone.remove();
            this.clone = null;
        }
        this.props.onDrag('handleDragEnd', this.props.item, this.props.index);
    };

    handleDrag = (event) => {
        const {clientX, clientY} = event;
        if (clientX === this.clientX && clientY === this.clientY) {
            return;
        }
        this.clientX = clientX;
        this.clientY = clientY;

        if (this.clone) {
            // const x = ((event.pageX || (event.clientX + document.body.scrollLeft)) - this.offsetX) + "px";
            // const y = ((event.pageX || (event.clientX + document.body.scrollLeft)) - this.offsetX) + "px";
            // this.clone.style.left = ((event.pageX || (event.clientX + document.body.scrollLeft)) - this.offsetX) + "px";
            // this.clone.style.top = ((event.pageY || (event.clientY + document.body.scrollTop)) - this.offsetY) + "px";
            // console.log(`translate(${x}, ${y})`);
            // this.clone.style.transform = `translate(${x}, ${y})`;
        }
    }
}
