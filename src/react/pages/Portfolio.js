import React from 'react';

import MobileNavigation from '../components/ui/MobileNavigation';
import DesktopNavigation from '../components/ui/DesktopNavigation';
import HomeButton from '../components/ui/HomeButton';

import Landing from '../components/sections/Landing';
import About from '../components/sections/About';

import FixedModal from '../components/FixedModal'


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

                <FixedModal 
                    text = {(
                        <p>
                            I am offering a significant discount to small businesses during this pandemic. E-mail me @  <a href="mailto:bergersr97@gmail.com">bergersr97@gmail.com</a>
                        </p>
                    )}
                />

                <Landing />
                <About />
            </div>
        )
    }
}


export default Portfolio