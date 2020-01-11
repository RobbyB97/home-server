import React from 'react'
import {connect} from 'react-redux'

import SplashPage from '../content/SplashPage'


export class Home extends React.Component {

    render() {
        return (
            <div id="home">
                <SplashPage />
                <div className={this.props.splash ? "home__background phone one": "home__background phone two"}></div>
                <div className={this.props.splash ? "home__background tablet one": "home__background tablet two"}></div>
                <div className={this.props.splash ? "home__background desktop one": "home__background desktop two"}></div>
                <div className={this.props.splash ? "home__background huge one": "home__background huge two"}></div>

                <div className="home__text one">
                    <p>
                        What is a perfect website? One that is <i>memorable</i>, <i>simplistic</i>, <i>intuitive</i> and <i>fast</i> would be my answer. However, every person has their own vision of the perfect website for themselves or their company. My mission is to take that vision and make it a reality.
                    </p>
                                
                </div>

                <div className="home__text two">
                    <h2>
                        
                    </h2>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      nav: state.navigation.nav,
      title: state.title.title,
      home: state.home.home,
      homePage: state.home.homePage,
      splash: state.home.splash
    }
}

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Home)