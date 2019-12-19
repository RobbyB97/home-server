import React from 'react'
import {connect} from 'react-redux'

// Components
import Skill from '../content/Skill'

const Skills = ({dispatch, nav, title}) => (
    <div id="skills">
        Skills component
        <Skill
            title="Test"
            description="Test"
        />
    </div>
)



const mapStateToProps = (state) => {
    return {
        nav: state.navigation.nav,
        title: state.title.title,
    }
}

  export default connect(mapStateToProps)(Skills)