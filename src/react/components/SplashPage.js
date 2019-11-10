import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import {splashOff} from '../actions/home'

const SplashPage = ({splash, dispatch}) => (
    <div id="splash-page" className={splash ? "":"hidden"}>
        <div class="splash-content">
            <h2>
                Designer.
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
    </div>
)

const mapStateToProps = (state) => {
    return {
        splash: state.home.splash
    }
  }

export default connect(mapStateToProps)(SplashPage)