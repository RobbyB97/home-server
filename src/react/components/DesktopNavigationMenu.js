import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {setTitle} from '../actions/title'


const DesktopNavigationMenu = ({dispatch}) => (
    <div id="desktop-navigation-menu">
        <ul>
            <li>
                <NavLink to="/react/" onClick={() => {
                    dispatch(setTitle(''))
                }}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/react/style_guide" onClick={() => {
                    dispatch(setTitle('Style Guide'))
                }}>Style Guide</NavLink>
            </li>
        </ul>
    </div>
)

export default connect()(DesktopNavigationMenu)