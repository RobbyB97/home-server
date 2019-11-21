import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {splashOff} from '../actions/home'

const SplashPage = ({splash, dispatch}) => (
    <div id="splash-page" className={splash ? "":"splash__hidden"}>
        <div className="splash-content">
            <p className="text-one">
                Designer.
            </p>

            <p className="text-two">
                Developer.
            </p>

            <p className="text-three">
                Problem solver.
            </p>

            <p className="text-four">
                Robby Bergers.
            </p>
            <button className="to-site" onClick={() => {
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