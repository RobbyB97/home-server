import React from 'react';
import { connect } from 'react-redux';


export class DesktopNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="DesktopNavigation"
                className={this.props.white ?
                    "white":""}
            >
                <nav>
                    <ul>
                        <li>
                            <a href="#About">About me</a>
                        </li>

                        <li>
                            <a href="#Skills">Skills</a>
                        </li>

                        <li>
                            <a href="#Projects">Projects</a>
                        </li>

                        <li>
                            <a href="#Experience">Experience</a>
                        </li>
                    </ul>
                </nav>
            </section>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        white: state.ui.white
    }
};


export default connect(mapStateToProps, undefined)(DesktopNavigation);