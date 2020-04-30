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
                    </div>

                    <article className="about__bio">
                        <p>
                            Hi, my name's Robby. <span className="about__bioTitle">I'm a front-end web developer and freelance digital artist.</span>

                            <br /><br />
                            I put my interdisciplinary skillset to good use by building websites that are as beautiful as they are functional.

                            
                        </p>
                    </article>
                </div>
            </section>
        );
    }
}


export default About;