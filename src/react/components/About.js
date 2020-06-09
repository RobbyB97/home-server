import React from 'react';

import Divider from './Divider'


export class About extends React.Component {
    render() {
        return (
            <section id="About" className="about">

                <div className="about__content one">
                    <div className="about__portrait">
                        <img src="/dist/images/aboutImage.png" />
                        <div className="about__text one">
                            <p>
                                <span className="one">Hi, my name's Robby. <span className="two">I'm a front-end developer and digital artist</span>.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <Divider section="about two" />

                <div className="about__content two">
                    <div className="about__text two">
                        <p>
                            I want to help you succeed by building a beautiful, fast and functional website for your business.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}


export default About;