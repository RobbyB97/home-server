import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';

const NavigationMenu = ({nav}) => (
    <div id="navigationMenu" className={nav ? 'active-nav':''}>
        <div id="nav-bg">
            <ul className="intra-nav">
                <li><NavLink to="/react/">Home</NavLink></li>
                <li><NavLink to="/react/style_guide">Style Guide</NavLink></li>
            </ul>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        nav: state.navigation.nav
    }
}

export default connect(mapStateToProps)(NavigationMenu)