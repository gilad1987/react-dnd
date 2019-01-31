import React from 'react';
import Draggable from "../dragable.abstract";
import classnames from 'classnames';

class Card extends Draggable {
    render() {
        const {item} = this.props;
        const className = classnames('Card', { isDragged: item.isDragged });
        return (
            <div
                className={className}
                draggable
                ref={ref => this.ref = ref}
                style={{height: `${item.height}px`}}
            >
                <div draggable="false">
                    {item.isDragged ? null : item.id}
                </div>
            </div>
        );
    }
}
export default Card;

