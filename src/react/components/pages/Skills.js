import React from 'react'
import {connect} from 'react-redux'

import Skill from '../content/Skill'


export class Skills extends React.Component {
    
    render() {
        return (
            <div id="skills">
                Skills component
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nav: state.navigation.nav,
        title: state.title.title,
    }
}

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Skills)