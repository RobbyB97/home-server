import React from 'react'

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


export default Experience