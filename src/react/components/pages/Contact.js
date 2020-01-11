import React from 'react'
import {connect} from 'react-redux'



export class Contact extends React.Component {
    
    render() {
        return (
            <div id="contact">
		        Contact component
	        </div>
        )
    }
}


const mapStateToProps = (state) => {
	return {
		nav: state.navigation.nav,
		title: state.title.title,
	}
}

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Contact)