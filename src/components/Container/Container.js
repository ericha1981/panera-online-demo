import React from 'react';
import './Container.css';

// Most outter wrapper
export default (props) => (
    <div className="Container">
        {props.children}
    </div>
);
