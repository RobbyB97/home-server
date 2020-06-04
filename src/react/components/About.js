import React from 'react';

import Divider from './Divider'


export class About extends React.Component {
    render() {
        return (
            <section id="About" className="about">
                <Divider section="about"/>

                <div className="about__content">
                    <div className="about__portrait">
                        <img src="/dist/images/aboutImage.png" />
                        <div className="about__text one">
                            <p>
                                <span className="one">Hi, my name's Robby. <span className="two">I'm a front-end developer and digital artist</span>.</span>
                            </p>
                        </div>
                    </div>


                    <div className="about__text two">
                        <p>
                            I love helping businesses succeed by building beautiful, fast and functional websites.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}


export default About;