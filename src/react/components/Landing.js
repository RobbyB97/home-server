import React from 'react';
import Particles from 'react-particles-js';
import ReactModal from 'react-modal'


export class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailModal: false
        };
    }

    /* Controls email modal */
    toggleEmail() {
        this.setState({
            emailModal: !this.state.emailModal
        });
    }
    render() {
        return (
            <div id="Landing" className="landing">
                    
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

                <section className="landing__menu">
                    <a className="landing__view"
                        href="#About">View my work</a>
                    <a className="landing__email"
                        onClick={() => {this.toggleEmail()}}>Get in touch</a>
                </section>

                {/* Email modal */}
                <section className={this.state.emailModal ? "landing__emailModal active":"landing__emailModal"}>
                    <p>Email me @ <a href="mailto:bergersr97@gmail.com">bergersr97@gmail.com</a></p>
                </section>

                <section className="landing__contact">
                    <a className="landing__github" href="https://www.github.com/robbyb97">
                        <div></div>
                    </a>
                    
                    <a className="landing__linkedin" href="https://www.linkedin.com/in/robbyb97/">
                        <div></div>
                    </a>

                    <a className="landing__upwork" href="https://www.upwork.com/o/profiles/users/~01f696e65011a54866/">
                        <div></div>
                    </a>

                    <a className="landing__twitter" href="https://twitter.com/RobbyBergers">
                        <div></div>
                    </a>
                </section>

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
                                distance: 45,
                                color: '#f8f8f8',
                                opacity: 0.5,
                                width: 1
                            },
                            color: {
                                value: '#f8f8f8'
                            }
                        }
                    }}
                />

                
            </div>
        );
    }
}


export default Landing;