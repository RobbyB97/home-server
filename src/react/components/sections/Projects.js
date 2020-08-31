import React from 'react';

import ProjectSection from '../ProjectSection'


export class Projects extends React.Component {
    render() {
        const projects = [
            {
                name: "Web Dev Bootcamp",
                languages: [
                    "Node.js", "Express", "npm", "Webpack", "APIs",
                    "React", "SASS", "Heroku"
                ],
                github: "https://github.com/RobbyB97/web-dev-bootcamp",
                description: "This repository contains all the Udemy\
                tutorials and basic throwaway projects that I used to\
                learn my stack. Check the GitHub if you want to see all\
                the projects that aren't worth putting here."
            }, {
                name: "SoloTwitch",
                languages: [
                    "Chrome extension", "npm", "Webpack", "SASS"
                ],
                github: "https://github.com/RobbyB97/SoloTwitch",
                website: "https://solotwitch.com",
                description: "SoloTwitch is a chrome extension which\
                redesigns the entire Twitch website to cleanly remove\
                all view counts in order to remove the subconscious mob\
                mentality from Twitch."
            }, {
                name: "Redux Boilerplate",
                languages: [
                    "Node.js", "Express", "npm", "webpack", "React",
                    "React Router", "Redux", "SASS", "firebase"
                ],
                github: "https://github.com/RobbyB97/ReduxBoilerplate",
                website: "https://reduxboilerplate.com",
                description: "To create a react application from scratch requires\
                an absurd amount of configuration of external packages. This boilerplate\
                puts React on par with other frameworks like Angular in terms of initial\
                configuration."
            }, {
                name: "Portfolio",
                languages: [
                    "Node.js", "Express", "npm", "Webpack", "React", "jest", 
                    "SASS", "firebase"
                ],
                github: "https://github.com/RobbyB97/home-server",
                website: "https://bergers.dev",
                description: "Originally the codebase for my old Dell R410\
                server, this repository now contains my portfolio (this website!),\
                which is hosted through Firebase."
            }, {
                name: "Flappy Bird AI",
                languages: [
                    "Node.js", "Express", "Heroku"
                ],
                github: "https://github.com/RobbyB97/Flappy-Bird-AI",
                website: "http://flappy-bird-ai.herokuapp.com/",
                customLinks: [{
                    text: "Code Bullet",
                    link: "https://www.youtube.com/watch?v=WSW-5m8lRMs"
                }],
                description: "An interesting application of RNN's in a Flappy Bird\
                clone. Code Bullet created this, destroyed it then put it on GitHub.\
                I fixed it and deployed it."
            }, {
                name: "YT-iframe",
                languages: [
                    "Python", "Beautiful Soup 4"
                ],
                github: "https://github.com/RobbyB97/yt-iframe-python",
                customLinks: [{
                    text: "PyPI",
                    link: "https://pypi.org/project/yt-iframe/"
                }],
                description: "YT_iframe is a Python package that allows the user to\
                create a responsive HTML page containing all of a YouTube channel's\
                videos with a single function call."
            }
        ];

        return (
            <section id="Projects" className="projects">
                <header className="projects__header">
                    <h2>Personal projects</h2>
                </header>

                <section className="projects__content">
                    {projects.map((project) => (
                        <ProjectSection key={project.name} {...project}/>
                    ))}
                </section>                
            </section>
        );
    }
}


export default Projects;