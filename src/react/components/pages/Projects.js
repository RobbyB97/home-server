import React from 'react'
import {connect} from 'react-redux'



const Projects = ({dispatch, nav, title}) => (
    <div id="projects">
        Projects component
    </div>
)



const mapStateToProps = (state) => {
    return {
      nav: state.navigation.nav,
      title: state.title.title,
    }
  }

  export default connect(mapStateToProps)(Projects)