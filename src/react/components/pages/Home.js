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

    attributeFadeIn = (target, time=0) => {
        let attribute = document.querySelector(target)

        if (time > 0) {
            setTimeout(() => {
                attribute.style.opacity = '1'
            }, time)    
        
        } else {
            attribute.style.opacity = '1'
        }
    }
    
    attributesFadeIn = () => {
        if (this.props.home) {
            this.attributeFadeIn('.attribute.fast', 300)
            this.attributeFadeIn('.attribute.responsive', 600)
            this.attributeFadeIn('.attribute.beautiful', 900)
            this.attributeFadeIn('.attribute.accessible', 1200)        
            this.homeOff()

        } else {
            this.attributeFadeIn('.attribute.fast')
            this.attributeFadeIn('.attribute.responsive')
            this.attributeFadeIn('.attribute.beautiful')            
            this.attributeFadeIn('.attribute.accessible')            
        }
    }

    homeOff = () => {
        this.props.homeOff()
    }

    splashOn = () => {
        setTimeout(() => {
            this.props.splashOn()            
        }, 200)
    }

    render() {

        return (
            <div id="home">

                <div className="home__text">
                    
                </div>
                
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
                    <p className="prevpage__text">
                        ←
                    </p>
                </div>
                
                <NextPage
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