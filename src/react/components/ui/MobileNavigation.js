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
                            <a href="#About" onClick={this.navToggle}>About</a>
                        </li>
                        {/*<li>
                            <a href="#Skills" onClick={this.navToggle}>Skills</a>
                        </li>
                        <li>
                            <a href="#Experience" onClick={this.navToggle}>Experience</a>
                        </li>
                        <li>
                            <a href="#Projects" onClick={this.navToggle}>Projects</a>
                        </li>
                        <li>
                            <a href="#Contact" onClick={this.navToggle}>Contact</a>
                        </li>*/}
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