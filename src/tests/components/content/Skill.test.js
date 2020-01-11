import React from 'react'
import {shallow} from 'enzyme'

import Skill from '../../../react/components/content/Skill'


test('Render Skill with only a title', () => {
    const wrapper = shallow(<Skill title="Title!"/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render Skill with title and description', () => {
    const wrapper = shallow(
        <Skill 
            title="Title!"
            description="Description!"
        />
    )

    expect(wrapper).toMatchSnapshot()
})