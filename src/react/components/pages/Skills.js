import React from 'react'
import {connect} from 'react-redux'

// Components


const Skills = ({dispatch, nav, title}) => (
    <div id="skills">
        Skills component
    </div>
)



const mapStateToProps = (state) => {
    return {
        nav: state.navigation.nav,
        title: state.title.title,
    }
}

  export default connect(mapStateToProps)(Skills)