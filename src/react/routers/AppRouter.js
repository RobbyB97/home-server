//Libraries
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';

//Components
import Header from '../components/common/Header'
import MobileNavigation from '../components/common/MobileNavigation'
import DesktopNavigation from '../components/common/DesktopNavigation'
import LogoBar from '../components/common/LogoBar'

//Pages
import Home from '../components/pages/Home'
import Skills from '../components/pages/Skills'
import Experience from '../components/pages/Experience'
import Projects from '../components/pages/Projects'
import SplashPage from '../components/pages/SplashPage'
import Resume from '../components/pages/Resume'
import WildCard from '../components/pages/WildCard'

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
                    <Header />
                    <DesktopNavigation />
                    <MobileNavigation />
                    <LogoBar />

                    <div id="main-content" onClick={this.toggleNavOff}>
                        <Switch>
                            {this.props.splash &&
                                <Route 
                                    path="/" 
                                    component={SplashPage} 
                                    exact 
                                />
                            }

                            {!this.props.splash &&
                                <Route 
                                    path="/" 
                                    component={Home} 
                                    exact 
                                />
                            }

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

                            <Route 
                                path="/resume"
                                component={Resume}
                                exact
                            />

                            <Route
                                path="/*"
                                component={WildCard}
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