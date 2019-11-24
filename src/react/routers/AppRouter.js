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
import Contact from '../components/pages/Contact'

// Actions
import {toggleNavOff} from '../actions/navigation'

// Routes
const AppRouter = ({nav, dispatch, title, home}) => (
  <BrowserRouter>
    <div>
      <Header />
      <DesktopNavigation />
      <MobileNavigation />
      <LogoBar />

      <div id="main-content"onClick={() => {
        dispatch(toggleNavOff())
      }}>
        <Switch>
          <Route 
            path="/react" 
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
            path="/contact" 
            component={Contact}
            exact
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