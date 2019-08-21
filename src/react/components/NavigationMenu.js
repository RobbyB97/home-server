import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import toggleNav from '../actions/navigation'
import {setTitle} from '../actions/title'


const NavigationMenu = ({nav, dispatch}) => (
    <div id="navigationMenu" className={nav ? 'active-nav':''}>
        <div id="nav-bg">
            <ul className="intra-nav">
                <li>
                    <NavLink to="/react/" onClick={() => {
                        dispatch(toggleNav())
                        dispatch(setTitle(''))
                    }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/react/style_guide" onClick={() => {
                        dispatch(toggleNav())
                        dispatch(setTitle('Style Guide'))
                    }}>Style Guide</NavLink>
                </li>
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