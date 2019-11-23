import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {splashOff} from '../actions/home'

const SplashPage = ({splash, dispatch}) => (
    <div id="splash" className={splash ? "":"splash__hidden"}>
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
                dispatch(splashOff())
            }}>
                Learn more →
            </button>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        splash: state.home.splash
    }
  }

export default connect(mapStateToProps)(SplashPage)