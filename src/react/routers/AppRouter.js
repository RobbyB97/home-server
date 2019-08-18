//Libraries
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Components
import Header from '../components/Header'
import ReactHome from '../components/ReactHome'
import StyleGuide from '../components/StyleGuide'
import ReactTest1 from '../components/ReactTest1'
import ReactApp from '../components/ReactApp'
import NavigationMenu from '../components/NavigationMenu'

// Routes
export default class AppRouter extends React.Component {
  state = {
    activeNav: this.props.activeNav
  }

  toggleNav = () => {
    let thing = !this.state.activeNav
    this.setState(() => ({
        activeNav: thing
    }))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div id="main-bg"></div>
          <div id="header-bg"></div>

          <Header
            toggleNav={this.toggleNav}
            activeNav={this.state.activeNav}
          />

          <NavigationMenu 
            activeNav={this.state.activeNav} 
            toggleNav={this.toggleNav}
            routeChange={this.routeChange}
          />

          <div id="main-content" className={this.state.activeNav ? 'active-nav':''}>
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
              <Route 
                path="/react/test" 
                component={ReactTest1}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
} 

AppRouter.defaultProps = {
  activeNav: false
}