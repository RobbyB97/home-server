import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {Divider} from '../content/Divider'
import NextPage from '../common/NextPage'
import Attribute from '../content/Attribute'
import {homeOff, splashOn} from '../../actions/home'

import {
    attribute_fast,
    attribute_responsive,
    attribute_beautiful,
    attribute_accessible
} from '../../data/content/Attribute'


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

        return (
            <div id="home">
                <div className="home__backdrop"></div>
                
                <div className="home__attributes">
                    <Attribute {...attribute_fast} />
                    <Attribute {...attribute_responsive} />
                    <Attribute {...attribute_beautiful} />
                    <Attribute {...attribute_accessible} />
                </div>

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

                <Divider />
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