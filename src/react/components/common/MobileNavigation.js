import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {toggleNav, toggleNavOff} from '../../actions/navigation'
import {setTitle} from '../../actions/title'
import {homeOn, homeOff} from '../../actions/home'


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
                            <NavLink to="/contact/" onClick={this.navNotHome}>
                                Contact
                            </NavLink>
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
        dispatch(homeOn())
    },
    navNotHome: () => {
        dispatch(toggleNav())
        dispatch(homeOff())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation)