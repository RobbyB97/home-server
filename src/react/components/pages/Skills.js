import React from 'react'

import Skill from '../content/Skill'

import {
    skill_frontEnd, 
    skill_backEnd, 
    skill_programming
} from '../../data/content/Skill'


export class Skills extends React.Component {
    
    render() {
        return (
            <div id="skills">

                <Skill {...skill_frontEnd}/>
                <Skill {...skill_backEnd}/>
                <Skill {...skill_programming}/>
            </div>
        )
    }
}


export default Skills