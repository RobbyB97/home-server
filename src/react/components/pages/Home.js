import React from 'react'
import {connect} from 'react-redux'

import Header from '../Header'
import StyleGuide from './StyleGuide'
import Card from '../Card'
import SplashPage from '../SplashPage'

import {toggleHomePage} from '../../actions/home'

import {Link, NavLink} from 'react-router-dom'

const Home = ({dispatch, nav, title, home, homePage}) =>(
            <div>
                <SplashPage />
                <div className="home-text one">
                        <h2>
                            
                        </h2>
                        {homePage}
                    </div>
                    <div className="home-text two">
                        <h2>Home-text 2</h2>
                    </div>
                <div id="home-cover" className={homePage ? "active":""}>
                    <div id="bio">
                        <section>
                            <div className="title">
                                My mission.
                            </div>
                            <div className="content">
                                What is a perfect website? One that is <i>simplistic</i>, <i>intuitive</i>, <i>fast</i> and <i>memorable</i> would be my answer. However, every person has their own vision of the perfect website for themselves or their company. My mission is to take that vision and make it a reality.
                            </div>
                        </section>
                    </div>
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

  export default connect(mapStateToProps)(Home)