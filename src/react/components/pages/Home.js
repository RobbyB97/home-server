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