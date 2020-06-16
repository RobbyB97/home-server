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
            <section id="Landing" className="landing">

                {/* Background color blocks */}
                <div className="landing__background">
                    <div className="one">
                        <div className="texture">
                            <div></div>
                        </div>
                    </div>
                    <div className="two">
                        <div className="texture">
                            <div></div>
                        </div>
                    </div>
                    <div className="three">
                        
                    </div>
                    <div className="four">
                        <Particles 
                            width="100vw"
                            height="100vh"
                            className="landing__particles"
                            params={{
                                particles: {
                                    number: {
                                        value: 110,
                                        density: {
                                            enable: true,
                                            value_area: 700
                                        }
                                    },
                                    line_linked: {
                                        enable: true,
                                        distance: 200,
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
                    <div className="five"></div>
                </div>
                    
                {/* Tagline */}
                <section className="landing__tagline">
                    <h2>
                        <span className="left">Robby</span> <span className="right">Bergers</span>
                    </h2>
                    <p className="one">
                        Designer
                    </p>
                    <p className="two">
                        Developer
                    </p>
                </section>

                {/* Menu buttons */}
                <section className="landing__menu">
                    <a className="landing__view" href="#About">
                        View my work
                    </a>
                    
                    <a className="landing__email"
                        onClick={() => {
                            this.toggleEmail();
                        }}
                    >
                        Get in touch
                    </a>
                </section>

                {/* Email modal */}
                <section className={this.state.emailModal ? "landing__emailModal active":"landing__emailModal"}>
                    <p>Email me @ <a href="mailto:bergersr97@gmail.com">bergersr97@gmail.com</a></p>
                </section>

                {/* Link icons */}
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
            </section>
        );
    }
}


export default Landing;