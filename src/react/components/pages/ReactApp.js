import React from 'react'
import {connect} from 'react-redux'

import Header from '../Header'
import StyleGuide from './StyleGuide'
import Card from '../Card'
import SplashPage from '../SplashPage'

import {toggleHomePage} from '../../actions/home'

import {Link, NavLink} from 'react-router-dom'

const ReactApp = ({dispatch, nav, title, home, homePage}) =>(
            <div>
                <SplashPage />
                <div className="home-text one">
                        <h2>Home-text 1</h2>
                        {homePage}
                    </div>
                    <div className="home-text two">
                        <h2>Home-text 2</h2>
                    </div>
                <div id="home-cover" className={homePage ? "active":""}>
                    <Card
                        link="https://www.github.com/robbyb97"
                        image="/assets/images/favicon.png"
                        title="My Github"
                        subtext="View my projects"
                    />
                </div>
            </div>
        )

const mapStateToProps = (state) => {
    return {
      nav: state.navigation.nav,
      title: state.title.title,
      home: state.home.home,
      homePage: state.home.homePage
    }
  }

  export default connect(mapStateToProps)(ReactApp)