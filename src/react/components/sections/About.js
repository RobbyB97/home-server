import React from 'react';

import Divider from '../Divider';


export class About extends React.Component {
    render() {
        return (
            <section id="About" className="about">
                <div className="about__content one">
                    <figure className="about__portrait">
                        <img src="/dist/images/aboutImage.png" />
                        
                        <div className="about__text one">
                            <p>
                                <span className="one">Hi, my name's Robby. <span className="two">I'm a front-end developer and digital artist</span>.</span>
                            </p>
                        </div>
                    </figure>
                </div>

                <Divider section="about__divider one" />

                <div className="about__content two">
                    <div className="about__text two">
                        <p>
                            I want to help you succeed by building a beautiful, fast and functional website for your business.
                        </p>
                    </div>
                </div>

                <Divider section="about__divider two" />
            </section>
        );
    }
}


export default About;