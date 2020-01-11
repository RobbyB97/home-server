import React from 'react'
import {connect} from 'react-redux'


export class Projects extends React.Component {

    render() {
        return (
            <div id="projects">
                Projects component
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

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)