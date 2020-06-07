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
                        <a href="#About">About me</a>
                    </li>
                    {/*<li>
                        <a href="#Experience">Experience</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>*/}
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