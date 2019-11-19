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

            <li className="github">
                <a href="https://www.github.com/RobbyB97" target="_blank">
                    <img src="/assets/images/icons/github.svg"></img>
                </a>
            </li>

            <li className="linkedin">
                <a href="https://www.linkedin.com/in/robbyb97" target="_blank">
                    <img src="/assets/images/icons/linkedin.png"></img>
                </a>
            </li>
        </ul>
    </div>
)

export default DesktopNavigationMenu