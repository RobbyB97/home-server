import React from 'react'
import {connect} from 'react-redux'



const Contact = ({dispatch, nav, title}) => (
	<div id="contact">
		Contact component
	</div>
)



const mapStateToProps = (state) => {
	return {
		nav: state.navigation.nav,
		title: state.title.title,
	}
}

export default connect(mapStateToProps)(Contact)