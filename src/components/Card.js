import React from 'react';
import Draggable from "../dragable.abstract";

 class Card extends Draggable {
    render() {

        return (
            <div className="Card" draggable="true" ref={ref => this.ref = ref}>
                {this.props.item}
            </div>
        );
    }
}

export default Card;
