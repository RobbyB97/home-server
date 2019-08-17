    
import React from 'react'
import {NavLink} from 'react-router-dom'

import StyleGuide from './StyleGuide'

const Header = (props) => (
  <header id="head">
    <div id="head-logo">
      <a href='#'>
        <img src='/assets/images/favicon.png' alt='Home'/> 
      </a>
    </div>
    <button id="inter-nav" onClick={props.toggleNav}>
      {!props.activeNav ? '☰':'✕'}
    </button>
    <h1>Header</h1>
  </header>
) 

export default Header