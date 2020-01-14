import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {splashOff} from '../../actions/home'

export class SplashPage extends React.Component {

    componentDidMount = () => {
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
            const text = document.querySelector('.splash__name')
            text.style.opacity = '1'
        }, 3000)

        setTimeout(() => {
            const text = document.querySelector('.splash__to-site')
            text.style.opacity = '1'
        }, 3100)

    }

    render() {
        return (
            <div id="splash" className={this.props.splash ? "":"splash__hidden"}>
                <div className="splash__background"></div>
                <div className="splash__content">
                    <p className="splash__text">
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
        
                    <p className="splash__name">
                        Robby Bergers.
                    </p>
                    <button className="splash__to-site" onClick={() => {
                        this.props.dispatch(splashOff())
                    }}>
                        Learn more →
                    </button>
                </div>
            </div> 
        )
    }
}

/*
<p className="splash__text one">
                        Designer.
                    </p>
        
                    <p className="splash__text two">
                        Developer.
                    </p>
        
                    <p className="splash__text three">
                        Problem solver.
                    </p>


setTimeout(() => {
            let text = document.querySelector('.splash__text.one')
            text.style.opacity = '1'
        }, 200)

        setTimeout(() => {
            let text = document.querySelector('.splash__text.two')
            text.style.opacity = '1'
        }, 350)

        setTimeout(() => {
            let text = document.querySelector('.splash__text.three')
            text.style.opacity = '1'
        }, 500)

        setTimeout(() => {
            let text = document.querySelector('.splash__name')
            text.style.opacity = '1'
        }, 750)

        setTimeout(() => {
            let text = document.querySelector('.splash__to-site')
            text.style.opacity = '1'
        }, 850)
*/

const mapStateToProps = (state) => {
    return {
        splash: state.home.splash
    }
  }

export default connect(mapStateToProps)(SplashPage)