import React from 'react'
import {withRouter} from 'react-router'
import {NavLink, Link, IndexLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {setTitle} from '../../actions/title'
import {homeOff} from '../../actions/home'
import {toggleNavOff} from '../../actions/navigation'



const DesktopNavigation = () => (
    <div id="desktop-navigation">
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

            <li>
                <NavLink to="/projects/"
                    activeClassName="active" 
                >Projects</NavLink>
            </li>


            <li>
                <NavLink to="/contact/"
                    activeClassName="active" 
                >Contact</NavLink>
            </li>

            <li className="desktop-navigation__link github">
                <a href="https://www.github.com/RobbyB97" target="_blank">
                    <div></div>
                </a>
            </li>

            <li className="desktop-navigation__link linkedin">
                <a href="https://www.linkedin.com/in/robbyb97" target="_blank">
                    <div></div>
                </a>
            </li>
        </ul>
    </div>
)

export default DesktopNavigation