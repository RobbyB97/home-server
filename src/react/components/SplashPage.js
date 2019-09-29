import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {splashOff} from '../actions/home'

const SplashPage = ({splash, dispatch}) => (
    <div id="splash-page" className={splash ? "":"hidden"}>
        <h2>
            Splash Page main text
        </h2>
        <h3>
            Splash Page subtext
        </h3>
        <button onClick={() => {
            dispatch(splashOff())
        }}>
            Splash Page button
        </button>
    </div>
)

const mapStateToProps = (state) => {
    return {
        splash: state.home.splash
    }
  }

export default connect(mapStateToProps)(SplashPage)