import React from 'react';


export class About extends React.Component {
    render() {
        return (
            <section id="About" className="about">
                <div className="about__shape one"></div>
                <div className="about__shape two"></div>

                <div className="about__content">
                    <article className="about__bio">
                        <p>
                            Hi, my name's Robby. <span className="about__bioTitle">I'm a full-stack web developer and freelance digital artist.</span>

                            <br /><br />
                            I put my interdisciplinary skillset to good use by designing websites that are as beautiful as they are functional.
                            
                            <br /><br />
                            <img className="about__portrait" src="/dist/images/4klanding_001phone.png"></img>
                        </p>
                    </article>
                </div>
            </section>
        );
    }
}


export default About;