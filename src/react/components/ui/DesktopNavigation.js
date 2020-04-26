import React from 'react';
import { connect } from 'react-redux';


/* Component */
export class DesktopNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="DesktopNavigation"
                className={this.props.white ?
                    "white":""}
            >
                <ul>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#services">services</a>
                    </li>
                    <li>
                        <a href="#skills">skills</a>
                    </li>
                    <li>
                        <a href="#experience">experience</a>
                    </li>
                    <li>
                        <a href="#projects">projects</a>
                    </li>
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        white: state.ui.white
    }
}


export default connect(mapStateToProps, undefined)(DesktopNavigation)