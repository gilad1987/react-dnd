import React from 'react';
import Draggable from "../dragable.abstract";

class Card extends Draggable {
    render() {
        return (
            <div
                className={'Card'}
                draggable="true"
                ref={ref => this.ref = ref}
                // style={{height: `${this.props.item.height}px`}}
            >
                {this.props.item.placeholder ? 'placeholder' : this.props.item.id}
            </div>
        );
    }
}

export default Card;
