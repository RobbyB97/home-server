import React from 'react'
import {connect} from 'react-redux'

import Skill from '../content/Skill'
import NextPage from '../common/NextPage'
import PrevPage from '../common/PrevPage'

import {skillFrontEnd, skillBackEnd, skillProgramming} from '../../data/content/Skill'


export class Skills extends React.Component {
    
    render() {
        return (
            <div id="skills">

                <Skill {...skillFrontEnd}/>
                <Skill {...skillBackEnd}/>
                <Skill {...skillProgramming}/>

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