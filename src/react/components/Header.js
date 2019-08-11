    
import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = (props) => (
  <header id="head">
    <div id="head-logo">
    <a href='#'>
        <img src='/assets/images/favicon.png' alt='Home'/> 
      </a>
    </div>
    <button className="inter-nav"></button>
    <h1>Header</h1>
  </header>
)


export default Header