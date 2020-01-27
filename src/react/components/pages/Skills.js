import React from 'react'
import {connect} from 'react-redux'

import Skill from '../content/Skill'
import NextPage from '../common/NextPage'
import PrevPage from '../common/PrevPage'


export class Skills extends React.Component {
    
    render() {
        return (
            <div id="skills">
                Skills component

                <PrevPage
                    text="Homepage"
                    route="/"
                    float={true}
                />

                <NextPage 
                    text="Experience"
                    route="/experience/"
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

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Skills)