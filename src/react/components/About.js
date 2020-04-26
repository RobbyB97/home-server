import React from 'react';
import ContactForm from '../components/ContactForm';


export class About extends React.Component {
    render() {
        return (
            <div id="about" className="about">
                {/* Background fanciness top */}
                <div className="about__shape one"></div>
                <div className="about__shape two"></div>

                

                <ContactForm />
            </div>
        );
    }
}


export default About;