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
                <NavLink to="/react/style_guide"
                    activeClassName="active" 
                    onClick={() => {
                        dispatch(setTitle('Style Guide'))
                        dispatch(toggleNavOff())
                        dispatch(homeOff())
                }}>Style Guide</NavLink>
            </li>

            <li>
                <NavLink to="/react/skills"
                    activeClassName="active" 
                    onClick={() => {
                        dispatch(setTitle('Skills'))
                        dispatch(toggleNavOff())
                        dispatch(homeOff())
                }}>Skills</NavLink>
            </li>

            <li>
                <NavLink to="/react/experience"
                    activeClassName="active" 
                    onClick={() => {
                        dispatch(setTitle('Experience'))
                        dispatch(toggleNavOff())
                        dispatch(homeOff())
                }}>Experience</NavLink>
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