import React from 'react'
import {connect} from 'react-redux'


export class Home extends React.Component {

    render() {
        return (
            <div id="home">
                
                <div className={this.props.splash ? "home__background phone one": "home__background phone two"}></div>
                <div className={this.props.splash ? "home__background tablet one": "home__background tablet two"}></div>
                <div className={this.props.splash ? "home__background desktop one": "home__background desktop two"}></div>
                <div className={this.props.splash ? "home__background huge one": "home__background huge two"}></div>

                <div className="home__text one">
                    <p>
                        Hey, my name's Robby. I'm a freelance front end developer. If you're looking for someone to design an elegant website or web app that your clients will love, then I'm your man. Click the links above to learn more about my skills or get in touch with me.
                    </p>
                                
                </div>

                <div className="home__text two">
                    <p>
                        What is a perfect website? The answer is a <i>memorable</i>, <i>simplistic</i>, <i>intuitive</i> and <i>fast</i> user experience. My goal is to create that perfect website for your business.
                    </p>
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