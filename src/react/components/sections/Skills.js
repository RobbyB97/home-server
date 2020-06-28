import React from 'react';

import SkillSection from '../SkillSection';


export class Skills extends React.Component {
    render() {
        return (
            <section id="Skills" className="skills">
                <header className="skills__header">
                    <h2>My skillset</h2>
                </header>

                <SkillSection 
                    title="Front end"
                    skills={[
                        "HTML5", "CSS3", "JS (ES6)",
                        "React (Router, Redux)",
                        "SASS"
                    ]}
                />

                <SkillSection 
                    title="Workflow"
                    skills={[
                        "Git", "NPM", "Gulp", "Webpack",
                        "Jest", "Firebase", "Heroku"
                    ]}
                />

                <SkillSection 
                    title="Back end"
                    skills={[
                        "Node.js", "Bash", "Linux/Ubuntu server",
                        "MongoDB", "Oracle SQL"
                    ]}
                />
            </section>
        );
    }
}


export default Skills;