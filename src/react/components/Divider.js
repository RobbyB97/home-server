import React from 'react';


export const Divider = (props) => (
    <div className={`divider ${props.section}`}>
        <div className="divider__shape one"></div>
        <div className="divider__shape two"></div>
    </div>
);


export default Divider;