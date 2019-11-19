import React from 'react'
import {connect} from 'react-redux'



const Experience = ({dispatch, nav, title}) => (
    <div id="experience">
        Experience component
    </div>
)



const mapStateToProps = (state) => {
    return {
      nav: state.navigation.nav,
      title: state.title.title,
    }
  }

  export default connect(mapStateToProps)(Experience)