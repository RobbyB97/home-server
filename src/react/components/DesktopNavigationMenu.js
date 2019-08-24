import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {setTitle} from '../actions/title'
import {toggleNavOff} from '../actions/navigation'


const DesktopNavigationMenu = ({dispatch}) => (
    <div id="desktop-navigation-menu">
        <ul>
            <li>
                <NavLink to="/react/style_guide" onClick={() => {
                    dispatch(setTitle('Style Guide'))
                    dispatch(toggleNavOff())
                }}>Style Guide</NavLink>
            </li>
        </ul>
    </div>
)

export default connect()(DesktopNavigationMenu)