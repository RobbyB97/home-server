import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/sections/Header';
import Landing from '../components/sections/Landing';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Footer from '../components/sections/Footer';

import FixedModal from '../components/FixedModal';


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
            <div id="Portfolio" 
                data-loaded={this.state.loaded}
                data-nav={this.props.nav}
            >
                <Header />

                <FixedModal 
                    text = {(
                        <p>
                            I am offering a significant discount to small businesses during this pandemic. E-mail me @  <a href="mailto:bergersr97@gmail.com">bergersr97@gmail.com</a>
                        </p>
                    )}
                />
                
                <Landing />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        nav: state.ui.nav
    }
};


export default connect(mapStateToProps, undefined)(Portfolio);