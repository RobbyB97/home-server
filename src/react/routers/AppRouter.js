//Libraries
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';

//Components
import Header from '../components/Header'
import NavigationMenu from '../components/NavigationMenu'

//Pages
import StyleGuide from '../components/pages/StyleGuide'
import ReactApp from '../components/pages/ReactApp'

// Actions
import {getTitle} from '../actions/title'

// Routes
const AppRouter = ({nav, dispatch, title}) => (
  <BrowserRouter>
    <div>
      <div id="main-bg" className="space"></div>
      <div id="header-bg"></div>
      <div id="main-title">
        {title}
      </div>

      <Header />
      <NavigationMenu />

      <div id="main-content">
        <Switch>
          <Route 
            path="/react/" 
            component={ReactApp} 
            exact={true} 
          />
          <Route 
            path="/react/style_guide/" 
            component={StyleGuide}
          />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

const mapStateToProps = (state) => {
  return {
    nav: state.navigation.nav,
    title: state.title.title
  }
}

export default connect(mapStateToProps)(AppRouter)