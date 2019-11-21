import React from 'react'
import {connect} from 'react-redux'

import SplashPage from '../SplashPage'



const Home = ({dispatch, nav, title, home, homePage}) =>(
    <div id="home">
        <SplashPage />
        <div id="main-bg" className="space"></div>

        <div className="home-text one">
            <p>
            What is a perfect website? One that is <i>simplistic</i>, <i>intuitive</i>, <i>fast</i> and <i>memorable</i> would be my answer. However, every person has their own vision of the perfect website for themselves or their company. My mission is to take that vision and make it a reality.
            </p>
                        
        </div>

        <div className="home-text two">
            <h2>
                Home-text 2
            </h2>
        </div>
    </div>
)

/*
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

    <div id="home-cover" className={homePage ? "active":""}>
    </div>
*/

const mapStateToProps = (state) => {
    return {
      nav: state.navigation.nav,
      title: state.title.title,
      home: state.home.home,
      homePage: state.home.homePage
    }
}

export default connect(mapStateToProps)(Home)