import React from 'react'
import {connect} from 'react-redux'

import Attribute from '../content/Attribute'


export class Home extends React.Component {

    render() {

        const fastAttribute = {
            image: "/dist/images/icons/speed_icon.png",
            title: "Fast",
            text: "Fully minified files and an optimized structure guarantee your website will load quickly, even on inconsistent internet connections."
        }

        const responsiveAttribute = {
            image: "/dist/images/icons/responsive_icon.png",
            title: "Responsive",
            text: "Mobile first development built up to 4k screens guarantees that your website will be elegant and functional on any device."
        }

        const beautifulAttribute = {
            image: "/dist/images/icons/paint_icon.png",
            title: "Beautiful",
            text: "A thorough, UX focused design process and open communication guarantees your website will look as beautiful as you envision it."
        }

        const accessibleAttribute = {
            image: "/dist/images/icons/accessibility_icon.png",
            title: "Accessible",
            text: "Full compliance with ADA standards guarantees that your website will be accessible and easy to use for everyone."
        }
        
        return (
            <div id="home">
                
                <div className={this.props.splash ? "home__background phone one": "home__background phone two"}></div>
                <div className={this.props.splash ? "home__background tablet one": "home__background tablet two"}></div>
                <div className={this.props.splash ? "home__background desktop one": "home__background desktop two"}></div>
                <div className={this.props.splash ? "home__background huge one": "home__background huge two"}></div>

                {!this.props.splash &&
                    <div className="home__attributes">
                        <Attribute {...fastAttribute} />
                        <Attribute {...responsiveAttribute} />
                        <Attribute {...beautifulAttribute} />
                        <Attribute {...accessibleAttribute} />
                    </div>
                }
                
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