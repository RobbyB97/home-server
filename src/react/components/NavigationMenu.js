import React from 'react'
import {NavLink} from 'react-router-dom'

const NavigationMenu = (props) => (
    <div id="navigationMenu" className={props.activeNav ? 'active-nav':''}>
        <div id="nav-bg">
            <ul className="intra-nav">
                <li><NavLink to="/react/" onClick={props.toggleNav}>Home</NavLink></li>
                <li><NavLink to="/react/style_guide" onClick={props.toggleNav}>Style Guide</NavLink></li>
            </ul>
        </div>
    </div>
)

export default NavigationMenu