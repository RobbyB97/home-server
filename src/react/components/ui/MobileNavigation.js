/* Libraries */
import React from 'react'
import {connect} from 'react-redux'

import {navToggle} from '../../actions/ui'


/* Component */
export class MobileNavigation extends React.Component {

    navToggle = () => {
        this.props.navToggle()
    }

    render() {
        return (
            <div id="MobileNavigation">
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
    }
}

const mapDispatchToProps = (dispatch) => ({
    navToggle: () => {
        dispatch(navToggle())
    }
})


/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation)