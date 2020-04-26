import React from 'react';

import MobileNavigation from '../components/ui/MobileNavigation';
import DesktopNavigation from '../components/ui/DesktopNavigation';
import HomeButton from '../components/ui/HomeButton';
import Landing from '../components/Landing'
import ContactForm from '../components/ContactForm';


export class Portfolio extends React.Component {

    render() {
        return (
            <div id="Portfolio">

                {/* UI */}
                <HomeButton internal />
                <DesktopNavigation />
                <MobileNavigation />

                <Landing />

                {/* About section */}                
                <div id="about" className="portfolio__about">
                    
                    {/* Background fanciness top */}
                    <div className="portfolio__aboutShape one"></div>
                    <div className="portfolio__aboutShape two"></div>

                    

                    <ContactForm />
                </div>

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