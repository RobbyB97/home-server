import React from 'react'
import {connect} from 'react-redux'

import JobCard from '../content/JobCard'


export class Experience extends React.Component {
    
    render() {
        return (
            <div id="experience">
                Experience component
                <JobCard
                    title="Finalsite"
                    text="Job"
                    image="/dist/images/icons/finalsite.png">
                </JobCard>
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


export default connect(mapStateToProps, mapDispatchToProps)(Experience)