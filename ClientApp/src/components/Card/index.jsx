import React from 'react';
import './styles.css';

const Card = (props) => {
    return (
        <div className="card">
            <h1>Soon to be a card component</h1>
            {props.children}
        </div>
    )
}

export default Card;