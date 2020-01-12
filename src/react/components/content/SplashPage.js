import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {splashOff} from '../../actions/home'

export class SplashPage extends React.Component {

    componentDidMount = () => {
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
    }

    render() {
        return (
            <div id="splash" className={this.props.splash ? "":"splash__hidden"}>
                <div className="splash__background"></div>
                <div className="splash__content">
                    <p className="splash__text one">
                        Designer.
                    </p>
        
                    <p className="splash__text two">
                        Developer.
                    </p>
        
                    <p className="splash__text three">
                        Problem solver.
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

const mapStateToProps = (state) => {
    return {
        splash: state.home.splash
    }
  }

export default connect(mapStateToProps)(SplashPage)