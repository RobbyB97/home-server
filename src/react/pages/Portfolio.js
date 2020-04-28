import React from 'react';

import MobileNavigation from '../components/ui/MobileNavigation';
import DesktopNavigation from '../components/ui/DesktopNavigation';
import HomeButton from '../components/ui/HomeButton';

import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';


export class Portfolio extends React.Component {

    render() {
        return (
            <div id="Portfolio">

                <HomeButton internal />
                <DesktopNavigation />
                <MobileNavigation />

                <Landing />
                <About />
                <Experience />
                <Projects />
                <Contact />

                {/* Services section */}
                <div id="services" className="portfolio__services">
                
                </div>

                <div id="skills" className="portfolio__skills">

                </div>
                <div id="experience" className="portfolio__experience">

                </div>
                <div id="projects" className="portfolio__projects">

                </div>
            </div>
        )
    }
}


export default Portfolio