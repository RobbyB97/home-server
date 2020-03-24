import React from 'react'

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
                    route="/skills/"
                    float={true}
                />

                <NextPage 
                    route="/projects/"
                    float={true}
                />
            </div>  
        )
    }
}


export default Experience