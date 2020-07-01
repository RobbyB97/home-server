import React from 'react';
import Particles from 'react-particles-js';


export class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailModal: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const thing = document.querySelector('p.left');
            
        }, 1000)
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

                    <div className="three"></div>
                    
                    <div className="four"></div>
                </div>
                    
                {/* Tagline */}
                <header className="landing__tagline">
                    <h2 className="left">
                        Robby
                    </h2>

                    <h2 className="right">
                        Bergers
                    </h2>

                    <p className="left">
                        Designer
                    </p>

                    <p className="right">
                        Developer
                    </p>
                </header>

                {/* Link icons */}
                <nav className="landing__contact">
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
                </nav>

                {/* Menu buttons */}
                <nav className="landing__menu">
                    <a 
                        className="landing__view" 
                        href="#About"
                    >
                        See my work
                    </a>

                    <a 
                        className="landing__resume" 
                        href="https://bergers.dev/resume.pdf"
                        target="_blank" 
                        rel="noopener"
                    >
                        View my resume
                    </a>
                    
                    <a className="landing__email"
                        onClick={() => {
                            this.toggleEmail();
                        }}
                    >
                        Get in touch
                    </a>
                </nav>

                {/* Email modal */}
                <div 
                    className="landing__emailModal"
                    data-active={this.state.emailModal}
                >
                    <p>Email me @ <a href="mailto:bergersr97@gmail.com">bergersr97@gmail.com</a></p>
                </div>
            </section>
        );
    }
}


export default Landing;