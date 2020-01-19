import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {splashOff} from '../../actions/home'

export class SplashPage extends React.Component {
    
    componentDidMount = () => {
        this.splashFadeIn()
    }

    splashOff = () => {
        this.props.splashOff()
    }

    splashFadeIn = () => {
        setTimeout(() => {
            const background = document.querySelector('.splash__background.two')
            background.style.opacity = '1'
        }, 2900)

        setTimeout(() => {
            const text = document.querySelector('.splash__words.one')
            text.style.opacity = '1'
        }, 200)
        
        setTimeout(() => {
            const text = document.querySelector('.splash__words.two')
            text.style.opacity = '1'
        }, 800)

        setTimeout(() => {
            const text = document.querySelector('.splash__words.three')
            text.style.opacity = '1'
        }, 1100)

        setTimeout(() => {
            const text = document.querySelector('.splash__words.four')
            text.style.opacity = '1'
        }, 1400)

        setTimeout(() => {
            const text = document.querySelector('.splash__words.five')
            text.style.opacity = '1'
        }, 1700)

        setTimeout(() => {
            const text = document.querySelector('.splash__words.six')
            text.style.opacity = '1'
        }, 2000)

        setTimeout(() => {
            const text = document.querySelector('.splash__words.seven')
            text.style.opacity = '1'
        }, 2300)

        setTimeout(() => {
            const text = document.querySelector('.splash__words.eight')
            text.style.opacity = '1'
        }, 2900)

        setTimeout(() => {
            const text = document.querySelector('.splash__words.nine')
            text.style.opacity = '1'
        }, 3500)

        setTimeout(() => {
            let text = document.querySelector('.splash__name')
            text.style.opacity = '1'
            text = document.querySelector('.splash__to-site')
            text.style.opacity = '1'
        }, 3900)
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
        splash: state.home.splash
    }
}

const mapDispatchToProps = (dispatch) => ({
    splashOff: () => dispatch(splashOff())
})


export default connect(mapStateToProps, mapDispatchToProps)(SplashPage)