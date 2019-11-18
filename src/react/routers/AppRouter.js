//Libraries
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'

//Components
import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'
import DesktopNavigationMenu from '../components/DesktopNavigationMenu'
import LogoBar from '../components/LogoBar'

//Pages
import StyleGuide from '../components/pages/StyleGuide'
import Home from '../components/pages/Home'
import Skills from '../components/pages/Skills'
import Experience from '../components/pages/Experience'

// Actions
import {getTitle} from '../actions/title'
import {homeOn, homeOff} from '../actions/home'
import {toggleNavOff} from '../actions/navigation'

// Routes
const AppRouter = ({nav, dispatch, title, home}) => (
  <BrowserRouter>
    <div id={home && "home"}>
      <div id={home && "main-bg"} className="space"></div>
      <div id="header-bg"></div>
      <div id="main-title">
        {}
      </div>

      
      <Header />
      <DesktopNavigationMenu />
      <NavigationMenu />
      <LogoBar></LogoBar>

      <div id="main-content"onClick={() => {
        dispatch(toggleNavOff())
      }}>
        <Switch>
          <Route 
            path="/react/" 
            component={Home} 
            exact={true} 
          />

          <Route 
            path="/react/style_guide/" 
            component={StyleGuide}
            exact={true}
          />

          <Route 
            path="/react/skills/" 
            component={Skills}
            exact={true}
          />

          <Route 
            path="/react/experience/" 
            component={Experience}
            exact={true}
          />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

const mapStateToProps = (state) => {
  return {
    nav: state.navigation.nav,
    title: state.title.title,
    home: state.home.home
  }
}

export default connect(mapStateToProps)(AppRouter)