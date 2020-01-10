import React from 'react'
import {NavLink} from 'react-router-dom'


const DesktopNavigation = () => (
    <div id="desktop-navigation">
        <ul>
            <li>
                <NavLink to="/"
                    activeClassName="active"
                    exact
                >Home</NavLink>
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