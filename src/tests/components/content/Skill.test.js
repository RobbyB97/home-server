import React from 'react'
import {shallow} from 'enzyme'

import Skill from '../../../react/components/content/Skill'
import skills from '../../fixtures/skills'


test('Render Skill with only a title', () => {
    const wrapper = shallow(<Skill {...skills[0]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render Skill with title and bits', () => {
    const wrapper = shallow(<Skill {...skills[1]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render Skill with title and description', () => {
    const wrapper = shallow(<Skill {...skills[2]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render Skill with title, bits and description', () => {
    const wrapper = shallow(<Skill {...skills[3]}/>)

    expect(wrapper).toMatchSnapshot()
})