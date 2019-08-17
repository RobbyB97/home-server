import React from 'react'
import {NavLink} from 'react-router-dom'

const NavigationMenu = (props) => (
    <div id="navigationMenu" className={props.activeNav ? 'active-nav':''}>
        <ul className="intra-nav">
            <li><NavLink to="/react/">Home</NavLink></li>
            <li><NavLink to="/react/style_guide">Style Guide</NavLink></li>
        </ul>
    </div>
)

export default NavigationMenu