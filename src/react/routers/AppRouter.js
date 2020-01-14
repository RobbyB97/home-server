//Libraries
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'

//Components
import Header from '../components/common/Header'
import MobileNavigation from '../components/common/MobileNavigation'
import DesktopNavigation from '../components/common/DesktopNavigation'
import LogoBar from '../components/common/LogoBar'

//Pages
import StyleGuide from '../components/pages/StyleGuide'
import Home from '../components/pages/Home'
import Skills from '../components/pages/Skills'
import Experience from '../components/pages/Experience'
import Projects from '../components/pages/Projects'
import SplashPage from '../components/pages/SplashPage'

// Actions
import {toggleNavOff} from '../actions/navigation'

// Routes
export class AppRouter extends React.Component {
    toggleNavOff = () => {
        this.props.toggleNavOff()
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <SplashPage />
                    <Header />
                    <DesktopNavigation />
                    <MobileNavigation />
                    <LogoBar />

                    <div id="main-content"onClick={this.toggleNavOff}>
                        <Switch>
                            <Route 
                                path="/" 
                                component={Home} 
                                exact 
                            />

                            <Route 
                                path="/style_guide" 
                                component={StyleGuide}
                                exact
                            />

                            <Route 
                                path="/skills" 
                                component={Skills}
                                exact
                            />

                            <Route 
                                path="/experience" 
                                component={Experience}
                                exact
                            />

                            <Route
                                path="/projects"
                                component={Projects}
                                exact
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}


const mapStateToProps = (state) => {
	return {
		nav: state.navigation.nav,
		title: state.title.title,
        home: state.home.home,
        splash: state.home.splash
	}
}

const mapDispatchToProps = (dispatch, props) => ({
    toggleNavOff: () => dispatch(toggleNavOff())
})


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)