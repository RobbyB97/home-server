import React from 'react'

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

                <Project {...project_ytIframe}/>
                <Project {...project_thisWebsite}/>
                <Project {...project_webDevBootcamp}/>
            </div>
        )
    }
}


export default Projects