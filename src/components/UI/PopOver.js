import React from 'react';
import './PopOver.css';

const Container = (props) => {
    return (
        <div className="PopOver">
            {props.text}
        </div>
    );
}

export default PopOver;
