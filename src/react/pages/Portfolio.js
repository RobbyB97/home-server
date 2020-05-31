import React from 'react';

import MobileNavigation from '../components/ui/MobileNavigation';
import DesktopNavigation from '../components/ui/DesktopNavigation';
import HomeButton from '../components/ui/HomeButton';

import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';


export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        // Disable loader
        setTimeout(() => {
            document.querySelector('.page-loader').style.opacity = 0;
        }, 200);
        
        // page fade in
        setTimeout(() => {
            document.querySelector('.page-loader').style.display = "none";
            this.setState({
                loaded: true
            });
        }, 300);
    }

    render() {
        return (
            <div id="Portfolio" className={this.state.loaded ? "loaded":""}>

                <HomeButton internal />
                <DesktopNavigation />
                <MobileNavigation />

                <Landing />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </div>
        )
    }
}


export default Portfolio