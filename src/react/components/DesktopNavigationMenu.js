import React from 'react'
import {withRouter} from 'react-router'
import {NavLink, Link, IndexLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {setTitle} from '../actions/title'
import {homeOff} from '../actions/home'
import {toggleNavOff} from '../actions/navigation'



const DesktopNavigationMenu = () => (
    <div id="desktop-navigation-menu">
        <ul>
            <li>
                <NavLink to="/react/"
                    activeClassName="active"
                >Home</NavLink>
            </li>

            <li>
                <NavLink to="/style_guide/"
                    activeClassName="active"
                >Style Guide</NavLink>
            </li>

            <li>
                <NavLink to="/skills/"
                    activeClassName="active"
                >Skills</NavLink>
            </li>

            <li>
                <NavLink to="/experience/"
                    activeClassName="active" 
                >Experience</NavLink>
            </li>
        </ul>
    </div>
)

/*const mapStateToProps = (state) => {
    return {
        home: state.home.home
    }
}*/

export default DesktopNavigationMenu