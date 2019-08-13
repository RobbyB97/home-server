//Libraries
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Components
import Header from '../components/Header'
import ReactHome from '../components/ReactHome'
import StyleGuide from '../components/StyleGuide'
import ReactTest1 from '../components/ReactTest1'

// Routes
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/react/" component={ReactHome} exact={true} />
        <Route path="/react/style_guide/" component={StyleGuide} />
        <Route path="/react/test" component={ReactTest1} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter