/* Libraries */
import React from 'react'


/* Components */
import MobileNavigation from '../components/ui/MobileNavigation'
import DesktopNavigation from '../components/ui/DesktopNavigation'
import HomeButton from '../components/ui/HomeButton'


export class Portfolio extends React.Component {

    render() {
        return (
            <div id="#Portfolio">

                {/* UI */}
                <HomeButton internal />
                <DesktopNavigation />
                <MobileNavigation />

                {/* Landing section */}
                <div className="portfolio__landing">
                    {/* Landing content */}
                    
                    <h2>Robby Bergers</h2>

                    {/* Background fanciness */}
                    <div className="portfolio__topShapes"></div>
                    <div className="portfolio__shapeOne"></div>
                    <div className="portfolio__shapeTwo"></div>
                    <div className="portfolio__shapeThree"></div>
                    <div className="portfolio__shapeFour"></div>
                    <div className="portfolio__shapeFive"></div>
                    <div className="portfolio__landingBottom">

                    </div>
                </div>

                {/* About section */}                
                <div id="about" className="portfolio__about">
                    <div className="portfolio__shapeSix"></div>
                    <div className="portfolio__shapeSeven"></div>
                    <div className="portfolio__shapeEight"></div>
                    <div className="portfolio__shapeNine"></div>
                    <div className="portfolio__shapeTen"></div>
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