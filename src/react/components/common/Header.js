import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {toggleNav, toggleNavOff} from '../../actions/navigation'
import {homeOn} from '../../actions/home'


export class Header extends React.Component {
	goHome = () => {
		this.props.goHome()
	}

	toggleNav = () => {
		this.props.toggleNav()
	}

	render() {
		return (
			<header id="header">
				<div className="header__logo">
					<NavLink to="/" onClick={this.goHome}>
						<img src='/dist/images/favicon.png' alt='Home'/> 
				  	</NavLink>
				</div>
	
				<button className="header__nav-button" onClick={this.toggleNav}>
					{!this.props.nav ? '☰':'✕'}
				</button>    
			</header>	
		)
	}
}


const mapStateToProps = (state) => {
	return {
		nav: state.navigation.nav
  	}
}

const mapDispatchToProps = (dispatch) => ({
	goHome: () => {
		dispatch(toggleNavOff())
	},
	toggleNav: () => dispatch(toggleNav())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)