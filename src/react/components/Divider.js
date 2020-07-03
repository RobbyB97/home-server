import React from 'react';


export class Divider extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={`divider ${this.props.section}`}>
                <div className="divider__shape one"></div>
                <div className="divider__shape two"></div>
            </div>
        );
    }
}


export default Divider;