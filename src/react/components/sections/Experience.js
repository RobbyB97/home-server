import React from 'react';

import ExperienceSection from '../ExperienceSection';


export class Experience extends React.Component {
    render() {
        return (
            <section id="Experience" className="experience">
                <ExperienceSection 
                    company="Finalsite"
                    jobTitle="Front End Developer"
                    description="I resolved bugs and implemented design changes on 
                    Finalsite's proprietary CMS through client submitted tickets.
                    I also improved upon their user guide."
                />

                <ExperienceSection 
                    company="Web Design Hub"
                    jobTitle="Junior Web Developer"
                    description="I resolved bugs and added features to PHP sites on 
                    The Web Design Hub's proprietary CMS."
                />
            </section>
        );
    }
}


export default Experience;