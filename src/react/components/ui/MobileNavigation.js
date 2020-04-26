/* Libraries */
import React from 'react'
import {connect} from 'react-redux'

import {navToggle} from '../../actions/ui'


/* Component */
export class MobileNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    navToggle = () => {
        this.props.navToggle();
    }

    render() {
        return (
            <div id="MobileNavigation" 
                className={this.props.white ?
                    "white":""}
            >
                <div className={this.props.nav ?
                    "mobileNavigation__button nav":
                    "mobileNavigation__button"}>
                    <div onClick={this.navToggle}>
					    {this.props.nav ? '✕':'☰'}
                    </div>
				</div>

                <div className={this.props.nav ? 
                    "mobileNavigation__menu nav":
                    "mobileNavigation__menu"}>
                    <ul className="mobileNavigation__links">
                        <li>
                            <a href="#about" onClick={this.navToggle}>about</a>
                        </li>
                        <li>
                            <a href="#services" onClick={this.navToggle}>services</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={this.navToggle}>skills</a>
                        </li>
                        <li>
                            <a href="#experience"onClick={this.navToggle}>experience</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={this.navToggle}>projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


/* Connect to store */
const mapStateToProps = (state) => {
    return {
        nav: state.ui.nav,
        white: state.ui.white
    }
}

const mapDispatchToProps = (dispatch) => ({
    navToggle: () => {
        dispatch(navToggle())
    }
})


/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation)