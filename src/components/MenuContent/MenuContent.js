import React from 'react';
import './MenuContent.css';

// Menu content container area
export default (props) => (
    <div style={{ "borderLeft": "1px solid #ded7c5", backgroundColor: "#fff" }}
        className="MenuContent">
        {props.children}
    </div>
);


// width: "83.33333333%" 