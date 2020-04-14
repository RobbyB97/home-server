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
                    
                    {/* Landing content */}
                    <div className="portfolio__tagLine">
                        
                    </div>
                    <h2>Robby Bergers</h2>


                    {/* Background fanciness */}
                    <Particles 
                        width="100vw"
                        height="100vh"
                        className="portfolio__particles one"
                        params={{
                            particles: {
                                number: {
                                    value: 80,
                                    density: {
                                        enable: true,
                                        value_area: 700
                                    }
                                },
                                color: {
                                    value: '#080808'
                                }
                            }
                        }}
                    />
                    {/*<Particles 
                        width="100vw"
                        height="100vh"
                        className="portfolio__particles two"
                        params={{
                            particles: {
                                line_linked: {
                                    shadow: {
                                        enable: true,
                                        color: '#080808',
                                        blur: 5
                                    }
                                }
                            }
                        }}
                    />
                    <Particles
                        width="100vw"
                        height="100vh"
                        className="portfolio__particles three"
                        params={{
                            particles: {
                                line_linked: {
                                    shadow: {
                                        enable: true,
                                        color: '#080808',
                                        blur: 10
                                    }
                                }
                            }
                        }}
                    />*/}
                    <div className="portfolio__topShapes"></div>
                    <div className="portfolio__landingShape one"></div>
                    <div className="portfolio__landingShape two"></div>
                    <div className="portfolio__landingShape three"></div>
                    <div className="portfolio__landingShape four"></div>
                    <div className="portfolio__landingShape five"></div>
                    <div className="portfolio__landingBottom">

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