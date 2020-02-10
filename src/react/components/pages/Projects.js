import React from 'react'
import {connect} from 'react-redux'

import PrevPage from '../common/PrevPage'
import NextPage from '../common/NextPage'
import Project from '../content/Project'

import {
    project_ytIframe, 
    project_thisWebsite, 
    project_webDevBootcamp
} from '../../data/content/Project'


export class Projects extends React.Component {

    render() {
        return (
            <div id="projects">
                Projects component

                <Project {...project_ytIframe}/>
                <Project {...project_thisWebsite}/>
                <Project {...project_webDevBootcamp}/>
                
                <PrevPage
                    text="Experience"
                    route="/experience/"
                    float={true}
                />

                <NextPage 
                    text="Resume"
                    route="/resume/"
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)