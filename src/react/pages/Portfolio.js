/* Libraries */
import React from 'react'
import Particles from 'react-particles-js'


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

                    <div className="portfolio__tagLine">
                        <h2 className="portfolio__tagLineTitle">
                            Robby Bergers
                        </h2>
                        <p className="portfolio__tagLineText one">
                            Designer
                        </p>
                        <p className="portfolio__tagLineText two">
                            Developer
                        </p>
                    </div>

                    <Particles 
                        width="100vw"
                        height="100vh"
                        className="portfolio__particles one"
                        params={{
                            particles: {
                                number: {
                                    value: 150,
                                    density: {
                                        enable: true,
                                        value_area: 700
                                    }
                                },
                                line_linked: {
                                    enable: true,
                                    distance: 60,
                                    color: '#808080',
                                    opacity: 0.5,
                                    width: 1
                                },
                                color: {
                                    value: '#000'
                                }
                            }
                        }}
                    />

                    <div className="portfolio__topShapes"></div>
                    <div className="portfolio__landingShape one"></div>
                    <div className="portfolio__landingShape two"></div>
                    <div className="portfolio__landingShape three"></div>
                    <div className="portfolio__landingShape four"></div>
                    <div className="portfolio__landingShape five"></div>
                    <div className="portfolio__landingBottom">
                        
                        <div>
                            Hire me on <a href="">Fiverr!</a>
                        </div>
                    </div>
                </div>

                {/* About section */}                
                <div id="about" className="portfolio__about">
                    
                    {/* Background fanciness top */}
                    <div className="portfolio__aboutShape one"></div>
                    <div className="portfolio__aboutShape two"></div>
                    <div className="portfolio__aboutShape three"></div>
                    <div className="portfolio__aboutShape four"></div>
                    <div className="portfolio__aboutShape five"></div>
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