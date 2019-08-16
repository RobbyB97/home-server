    
import React from 'react'
import {NavLink} from 'react-router-dom'

import StyleGuide from './StyleGuide'

export default class Header extends React.Component {
  state = {
    active: this.props.active
  }

  toggle = () => {
    console.log(this.props.active)
    this.setState(() => ({
      active: this.props.active ? true: false
    }))
    console.log(this.props.active)
  }

  render () {
    return (
      <header id="head">
        <div id="head-logo">
          <a href='#'>
            <img src='/assets/images/favicon.png' alt='Home'/> 
          </a>
        </div>
        <NavLink to="/react/">Home</NavLink>
        <NavLink to="/react/style_guide">Style Guide</NavLink>
        <button className="inter-nav" onClick={this.toggle}>
          {this.props.active ? '✕':'☰'}
        </button>
        <h1>Header</h1>
      </header>
    )
  }
}

Header.defaultProps = {
  active: true
}