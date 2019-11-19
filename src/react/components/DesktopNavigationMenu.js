import React from 'react'
import {withRouter} from 'react-router'
import {NavLink, Link, IndexLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {setTitle} from '../actions/title'
import {homeOff} from '../actions/home'


const DesktopNavigationMenu = ({dispatch}) => (
    <div id="desktop-navigation-menu">
        <ul>
            <li>
            <NavLink to="/react"
                    activeClassName="active"
                    onClick={() => {
                        dispatch(setTitle('Home'))
                }}>Home</NavLink>
            </li>

            <li>
                <NavLink to="/style_guide"
                    activeClassName="active"
                    onClick={() => {
                        dispatch(setTitle('Style Guide'))
                        dispatch(homeOff())
                }}>Style Guide</NavLink>
            </li>

            <li>
                <NavLink to="/skills"
                    activeClassName="active"
                    onClick={() => {
                        dispatch(setTitle('Skills'))
                        dispatch(homeOff())
                }}>Skills</NavLink>
            </li>

            <li>
                <NavLink to="/experience"
                    activeClassName="active" 
                    onClick={() => {
                        dispatch(setTitle('Experience'))
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

export default connect(mapStateToProps)(withRouter(DesktopNavigationMenu))