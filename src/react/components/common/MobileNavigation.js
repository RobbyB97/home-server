import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {toggleNav, toggleNavOff} from '../../actions/navigation'
import {setTitle} from '../../actions/title'
import {homeOn, homeOff} from '../../actions/home'


const MobileNavigation = ({nav, dispatch, home}) => (
    <div id="mobile-navigation" className={nav ? 'active-nav':''}>
        <div className="mobile-navigation__background">
            <ul className="mobile-navigation__intra-nav">
                <li>
                    <NavLink to="/react" onClick={() => {
                        dispatch(toggleNav())
                        dispatch(setTitle(''))
                        dispatch(homeOn())
                    }}>Home</NavLink>
                </li>
                
                <li>
                    <NavLink to="/style_guide" onClick={() => {
                        dispatch(toggleNav())
                        dispatch(setTitle('Style Guide'))
                        dispatch(homeOff())
                    }}>Style Guide</NavLink>
                </li>

                <li>
                    <NavLink to="/skills" onClick={() => {
                        dispatch(toggleNav())
                        dispatch(setTitle('Skills'))
                        dispatch(homeOff())
                    }}>Skills</NavLink>
                </li>

                <li>
                    <NavLink to="/experience" onClick={() => {
                        dispatch(toggleNav())
                        dispatch(setTitle('Experience'))
                        dispatch(homeOff())
                    }}>Experience</NavLink>
                </li>
            </ul>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        nav: state.navigation.nav,
        home: state.home.home
    }
}

export default connect(mapStateToProps)(MobileNavigation)