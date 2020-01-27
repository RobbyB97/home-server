import React from 'react'
import {connect} from 'react-redux'

import PrevPage from '../common/PrevPage'
import NextPage from '../common/NextPage'


export class Projects extends React.Component {

    render() {
        return (
            <div id="projects">
                Projects component
                
                <PrevPage
                    text="Experience"
                    route="/experience/"
                    float={true}
                />

                <NextPage 
                    text="Resume"
                    route="/resume/"
                    float={true}
                />
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