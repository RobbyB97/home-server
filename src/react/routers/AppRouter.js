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
import Resume from '../components/pages/Resume'
import Page404 from '../components/pages/Page404'

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

                            <Route
                                path="/"
                                component={Home}
                                exact 
                            />
                            
                            <Route 
                                path="/skills" 
                                component={Skills}
                            />

                            <Route 
                                path="/experience" 
                                component={Experience}
                            />

                            <Route
                                path="/projects"
                                component={Projects}
                            />

                            <Route 
                                path="/resume"
                                component={Resume}
                            />

                            <Route
                                path="/*"
                                component={Page404}
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
        home: state.home.home
	}
}

const mapDispatchToProps = (dispatch, props) => ({
    toggleNavOff: () => dispatch(toggleNavOff())
})


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)