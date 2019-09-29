import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

const SplashPage = ({dispatch}) => {
    <div id="splash-page">
        <h2>
            Splash Page main text
        </h2>
        <h3>
            Splash Page subtext
        </h3>
        <button>
            Splash Page button
        </button>
    </div>
}

export default connect(mapStateToProps)(SplashPage)