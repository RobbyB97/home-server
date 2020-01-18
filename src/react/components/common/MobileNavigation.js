import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {toggleNav} from '../../actions/navigation'
import {homeOff} from '../../actions/home'


export class MobileNavigation extends React.Component {
    navHome = () => {
        this.props.navHome()
    }

    navNotHome = () => {
        this.props.navNotHome()
    }

    render() {
        return (
            <div id="mobile-navigation" className={this.props.nav ? "active-nav":""}>
                <div className="mobile-navigation__background">
                    <ul className="mobile-navigation__intra-nav">
                        <li>
                            <NavLink to="/" onClick={this.navHome}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/skills/" onClick={this.navNotHome}>
                                Skills
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/experience/" onClick={this.navNotHome}>
                                Experience
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/projects/" onClick={this.navNotHome}>
                                Projects
                            </NavLink>
                        </li>

                        <li>
                            <a href="mailto:bergersr@my.easternct.edu">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        nav: state.navigation.nav,
        home: state.home.home
    }
}

const mapDispatchToProps = (dispatch) => ({
    navHome: () => {
        dispatch(toggleNav())
    },
    navNotHome: () => {
        dispatch(toggleNav())
        dispatch(homeOff())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation)