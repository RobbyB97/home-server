import React from 'react';
import Particles from 'react-particles-js';


export class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Used for shape animation on bottom of landing section
            shapeOne: false,
            shapeTwo:  false,
            shapeThree: false,
            shapeFour: false,
            shapeFive: false
        }
    }

    componentDidMount() {
        this.landingAnimation()
    }

    landingAnimation = () => {
        setTimeout(() => {
            this.setState({
                shapeOne: true
            });    
        }, 500);
        setTimeout(() => {
            this.setState({
                shapeTwo: true
            });
        }, 650);
        setTimeout(() => {
            this.setState({
                shapeThree: true
            });
        }, 800);
        setTimeout(() => {
            this.setState({
                shapeFour: true
            });
        }, 950);
        setTimeout(() => {
            this.setState({
                shapeFive: true
            });
        }, 1100);
    }

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

                <div className={this.state.shapeOne ?
                    "landing__shape one":
                    "landing__shape"}></div>
                <div className={this.state.shapeTwo ?
                    "landing__shape two":
                    "landing__shapte"}></div>
                <div className={this.state.shapeThree ?
                    "landing__shape three":
                    "landing__shape"}></div>
                <div className={this.state.shapeFour ?
                    "landing__shape four":
                    "landing__shape"}></div>
                <div className={this.state.shapeFive ?
                    "landing__shape five":
                    "landing__shape"}></div>
                <div className="landing__bottom">
                    
                    
                </div>
            </div>
        );
    }
}


export default Landing;