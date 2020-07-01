import React from 'react';

import ExperienceSection from '../ExperienceSection';


export class Experience extends React.Component {
    render() {
        const sections = [
            {
                logo: "/dist/images/icons/finalsite/finalsite-logo.png",
                company: "Finalsite",
                jobTitle: "Front End Developer",
                dates: [
                    "July 2019", "December 2019"
                ],
                description: "I resolved bugs and implemented design changes\
                on Finalsite's proprietary CMS through client submitted tickets.\
                I also improved upon their user guide."
            }, {
                logo: "/dist/images/icons/twdh/twdh-logo.png",
                company: "Web Design Hub",
                jobTitle: "Junior Web Developer",
                dates: [
                    "November 2018", "June 2019"
                ],
                description: "I resolved bugs and added features to PHP sites on\
                The Web Design Hub's proprietary CMS."
            }
        ]

        return (
            <section id="Experience" className="experience">
                <header className="experience__header">
                    <h2>Previous experience</h2>
                </header>

                <div className="experienceSection__content">
                    {sections.map((section) => (
                        <ExperienceSection
                            {...section}
                            key={section.company}
                        />
                    ))}
                </div>
            </section>
        );
    }
}


export default Experience;