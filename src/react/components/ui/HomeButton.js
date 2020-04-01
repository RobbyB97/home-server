/* Libraries */
import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


/* Component */
export class HomeButton extends React.Component {
    render() {
        return (
            <div id="HomeButton" className={this.props.nav ? "nav":""}>
                <NavLink to="/" className="homeButton__logo">
                    B
				</NavLink>
            </div>
        )
    }
}


/* Connect to store */
const mapStateToProps = (state) => {
    return {
        nav: state.ui.nav
    }
}


/* Export */
export default connect(mapStateToProps, undefined)(HomeButton)