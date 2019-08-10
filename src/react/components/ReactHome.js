import React from 'react'
import {NavLink} from 'react-router-dom'

// Components

const ReactHome = () => (
  <div>
    This is from my homepage component <br/>
    Go to <NavLink to="/react/test">Test</NavLink>
  </div>
)


export default ReactHome