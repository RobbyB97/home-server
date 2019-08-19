import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import toggleNav from '../actions/navigation'
import StyleGuide from './StyleGuide'
import NavigationMenu from './NavigationMenu'

const Header = ({nav, dispatch}) => (
  <header id="head">
    <div id="head-logo">
      <a href='#'>
        <img src='/assets/images/favicon.png' alt='Home'/> 
      </a>
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