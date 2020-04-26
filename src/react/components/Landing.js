import React from 'react';
import Particles from 'react-particles-js';


export class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <div className="landing__background"></div>

                <div className="landing__tagline">
                    <h2>
                        Robby Bergers
                    </h2>
                    <p className="one">
                        Designer
                    </p>
                    <p className="two">
                        Developer
                    </p>
                </div>

                <Particles 
                    width="100vw"
                    height="100vh"
                    className="landing__particles"
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

                <div className="landing__shape one"></div>
                <div className="landing__shape two"></div>
                <div className="landing__shape three"></div>
                <div className="landing__shape four"></div>
                <div className="landing__shape five"></div>
                <div className="landing__bottom">
                    
                    
                </div>
            </div>
        );
    }
}


export default Landing;