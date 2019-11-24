import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {toggleNav, toggleNavOff} from '../../actions/navigation'
import {setTitle} from '../../actions/title'
import {homeOn} from '../../actions/home'


const Header = ({nav, dispatch}) => (
	<header id="header">
		<div className="header__logo">
	  		<NavLink to="/react/" onClick={() => {
				dispatch(setTitle(''))
				dispatch(toggleNavOff())
				dispatch(homeOn())
	  		}}>
			<img src='/assets/images/favicon.png' alt='Home'/> 
	  		</NavLink>
		</div>

		<button className="header__nav-button" onClick={() => {
	  		dispatch(toggleNav())
		}}>
	  		{!nav ? '☰':'✕'}
		</button>    
  	</header>
) 

const mapStateToProps = (state) => {
	return {
		nav: state.navigation.nav
  	}
}

export default connect(mapStateToProps)(Header)