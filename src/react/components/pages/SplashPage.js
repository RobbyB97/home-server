import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {splashOff} from '../../actions/home'

export class SplashPage extends React.Component {
    
    componentDidMount = () => {
        if (!this.props.test) {
            if (this.props.splashFade) {
                this.splashFadeIn()
            } else {
                this.splashFlashIn()
            }
        }
    }

    splashOff = () => {
        this.props.splashOff()
    }

    textFadeIn = (element, time=0) => {
        if (time > 0) {
            setTimeout(() => {
                const attribute = document.querySelector(element)
                attribute.style.opacity = '1'
            }, time)
        } else {
            const attribute = document.querySelector(target)
            attribute.style.opacity = '1'
        }
    }

    splashFadeIn = () => {
        this.textFadeIn('.splash__background.two', 2900)
        this.textFadeIn('.splash__words.one', 200)
        this.textFadeIn('.splash__words.two', 800)
        this.textFadeIn('.splash__words.three', 1100)        
        this.textFadeIn('.splash__words.four', 1400)
        this.textFadeIn('.splash__words.five', 1700)
        this.textFadeIn('.splash__words.six', 2000)
        this.textFadeIn('.splash__words.seven', 2300)
        this.textFadeIn('.splash__words.eight', 2900)
        this.textFadeIn('.splash__words.nine', 3500)
        this.textFadeIn('.splash__name', 3900)
        this.textFadeIn('.splash__to-site', 3900)
    }

    splashFlashIn = () => {
        const textNodes = [
            '.splash__background.two',
            '.splash__words.one',
            '.splash__words.two',
            '.splash__words.three',
            '.splash__words.four',
            '.splash__words.five',
            '.splash__words.six',
            '.splash__words.seven',
            '.splash__words.eight',
            '.splash__words.nine',
            '.splash__name',
            '.splash__to-site'
        ]

       textNodes.forEach((node) => {
           this.textFadeIn(node)
       })
        
    }

    render() {
        return (
            <div id="splash" className={this.props.splash ? "":"splash__hidden"}>
                <div className="splash__background one"></div>
                <div className="splash__background two"></div>

                <div className="splash__content">
                    <p className="splash__text one">
                        <span className="splash__words one">
                            What is a perfect website?&nbsp;
                        </span>
                        <span className="splash__words two">
                            The answer is a&nbsp;
                        </span>
                        <span className="splash__words three">
                            <i>memorable</i>,&nbsp;
                        </span>
                        <span className="splash__words four">
                            <i>simplistic</i>,&nbsp;
                        </span>
                        <span className="splash__words five">
                            <i>intuitive</i>,&nbsp;
                        </span>
                        <span className="splash__words six">
                            and <i>fast</i>&nbsp;
                        </span>
                        <span className="splash__words seven">
                            user experience.&nbsp;
                        </span>
                        <span className="splash__words eight">
                            My goal is to create that perfect website for your business.
                        </span>
                    </p>

                    <p className="splash__text two">
                        <span className="splash__words nine">
                            Hi, my name's Robby. I'm a freelance front end developer. If you've been searching for someone to design an elegant website or web app that your clients will love, your search is over.
                        </span>
                    </p>
        
                    <p className="splash__name">
                        Robby Bergers.
                    </p>
                    <button className="splash__to-site" onClick={() => {
                        this.splashOff()
                    }}>
                        Learn more →
                    </button>
                </div>
            </div> 
        )
    }
}


const mapStateToProps = (state) => {
    return {
        splash: state.home.splash,
        splashFade: state.home.splashFade
    }
}

const mapDispatchToProps = (dispatch) => ({
    splashOff: () => dispatch(splashOff())
})


export default connect(mapStateToProps, mapDispatchToProps)(SplashPage)