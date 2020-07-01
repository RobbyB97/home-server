import React from 'react';

import SkillSection from '../SkillSection';


export class Skills extends React.Component {
    render() {
        const sections = [
            {
                title: "Front end",
                skills: [
                    "React", "SASS", "HTML5", "CSS3", "JS (ES6)"
                ]
            }, {
                title: "Workflow",
                skills: [
                    "Git", "NPM", "Gulp", "Webpack", "Jest", 
                    "Firebase", "Heroku"
                ]
            }, {
                title: "Back end",
                skills: [
                    "Node.js", "BASH", "Linux/Ubuntu server",
                    "MongoDB", "Oracle SQL"
                ]
            }
        ];

        return (
            <section id="Skills" className="skills">
                <header className="skills__header">
                    <h2>My skillset</h2>
                </header>


                <section className="skills__content">
                    {sections.map((section) => (
                        <SkillSection 
                            {...section}
                            key={section.title}
                        />
                    ))}
                </section>
            </section>
        );
    }
}


export default Skills;