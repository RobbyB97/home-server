import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import toggleNav from '../actions/navigation'
import StyleGuide from './pages/StyleGuide'
import NavigationMenu from './NavigationMenu'

const Header = ({nav, dispatch}) => (
  <header id="head">
    <div id="head-logo">
      <NavLink to="/react/">
        <img src='/assets/images/favicon.png' alt='Home'/> 
      </NavLink>
    </div>
    <div id="head-nav-desktop">

    </div>
    <button id="nav-button" onClick={() => {
      dispatch(toggleNav())
    }}>
      {!nav ? '☰':'✕'}
    </button>
    <h1>{!!nav}</h1>
  </header>
) 

const mapStateToProps = (state) => {
  return {
    nav: state.navigation.nav
  }
}

export default connect(mapStateToProps)(Header)