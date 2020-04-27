import React from 'react';


export class About extends React.Component {
    render() {
        return (
            <div id="about" className="about">
                {/* Background fanciness top */}
                <div className="about__shape one"></div>
                <div className="about__shape two"></div>

                <div className="about__content">
                    <div className="about__bio">
                        <p>
                            Hi, my name's Robby. I'm a full-stack web developer and digital artist. I love clean, responsive and intuitive interfaces, and so do your clients.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


export default About;