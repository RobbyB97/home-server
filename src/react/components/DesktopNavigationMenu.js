import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {setTitle} from '../actions/title'
import {toggleNavOff} from '../actions/navigation'
import {homeOff} from '../actions/home'


const DesktopNavigationMenu = ({dispatch}) => (
    <div id="desktop-navigation-menu">
        <ul>
            <li>
                <NavLink to="/react/style_guide" onClick={() => {
                    dispatch(setTitle('Style Guide'))
                    dispatch(toggleNavOff())
                    dispatch(homeOff())
                }}>Style Guide</NavLink>
            </li>
        </ul>
    </div>
)

const mapStateToProps = (state) => {
    return {
        home: state.home.home
    }
}

export default connect(mapStateToProps)(DesktopNavigationMenu)