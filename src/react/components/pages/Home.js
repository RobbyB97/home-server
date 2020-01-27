import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {Divider} from '../content/Divider'
import NextPage from '../common/NextPage'
import Attribute from '../content/Attribute'
import {homeOff, splashOn} from '../../actions/home'


export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            home: props.home,
            test: props.test
        }
    }

    componentDidMount = () => {
        if (!this.props.test) {
            this.attributesFadeIn()
        }
    } 
    
    attributesFadeIn = () => {
        if (this.props.home) {
            setTimeout(() => {
                let attribute = document.querySelector('.attribute.fast')
                attribute.style.opacity = '1'
            }, 300)
        
            setTimeout(() => {
                let attribute = document.querySelector('.attribute.responsive')
                attribute.style.opacity = '1'            
            }, 600)
        
            setTimeout(() => {
                let attribute = document.querySelector('.attribute.beautiful')
                attribute.style.opacity = '1'
            }, 900)
        
            setTimeout(() => {
                let attribute = document.querySelector('.attribute.accessible')
                attribute.style.opacity = '1'
            }, 1200)
        
            this.homeOff()

        } else {
            let attribute = document.querySelector('.attribute.fast')
            attribute.style.opacity = '1'

            attribute = document.querySelector('.attribute.responsive')
            attribute.style.opacity = '1' 
            
            attribute = document.querySelector('.attribute.beautiful')
            attribute.style.opacity = '1' 
            
            attribute = document.querySelector('.attribute.accessible')
            attribute.style.opacity = '1'
        }
    }

    homeOff = () => {
        this.props.homeOff()
    }

    splashOn = () => {
        this.props.splashOn()
    }

    render() {
        const fastAttribute = {
            image: "/dist/images/icons/speed_icon.png",
            title: "Fast",
            text: "Fully minified files and an optimized structure guarantee your website will always load quickly."
        }

        const responsiveAttribute = {
            image: "/dist/images/icons/responsive_icon.png",
            title: "Responsive",
            text: "Mobile first development ensures your site works smoothly on all screen sizes."
        }

        const beautifulAttribute = {
            image: "/dist/images/icons/paint_icon.png",
            title: "Beautiful",
            text: "A UX focused design process guarantees your website is as functional as it is elegant."
        }

        const accessibleAttribute = {
            image: "/dist/images/icons/accessibility_icon.png",
            title: "Accessible",
            text: "Compliance with ADA standards ensures your website is accessible and easy to use for everyone."
        }
        
        return (
            <div id="home">
                <div className="home__backdrop"></div>
                
                <div className="home__attributes">
                    <Attribute {...fastAttribute} />
                    <Attribute {...responsiveAttribute} />
                    <Attribute {...beautifulAttribute} />
                    <Attribute {...accessibleAttribute} />
                </div>
                
                <Divider />

                <div 
                    className="prevpage float"
                    onClick={this.splashOn}
                >
                    <NavLink to="/">
                        <p className="prevpage__text">
                            ← Splash page
                        </p>
                    </NavLink>
                </div>
                
                <NextPage
                    text="Skills"
                    route="/skills/"
                    float={true}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      nav: state.navigation.nav,
      home: state.home.home,
      splash: state.home.splash
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    homeOff: () => dispatch(homeOff()),
    splashOn: () => dispatch(splashOn())
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)