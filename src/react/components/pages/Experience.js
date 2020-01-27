import React from 'react'
import {connect} from 'react-redux'

import Job from '../content/Job'
import PrevPage from '../common/PrevPage'
import NextPage from '../common/NextPage'


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

                <PrevPage
                    text="Skills"
                    route="/skills/"
                    float={true}
                />

                <NextPage 
                    text="Projects"
                    route="/projects/"
                    float={true}
                />
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