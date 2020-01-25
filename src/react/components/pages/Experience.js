import React from 'react'
import {connect} from 'react-redux'

import Job from '../content/Job'


export class Experience extends React.Component {
    
    render() {
        return (
            <div id="experience">
                
                Experience component
                <Job
                    title="Finalsite"
                    text="Job"
                    image="/dist/images/icons/finalsite.png">
                </Job>
            </div>  
        )
    }
}


const mapStateToProps = (state) => {
	return {
		nav: state.navigation.nav,
        title: state.title.title,
        splash: state.home.splash
	}
}

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Experience)