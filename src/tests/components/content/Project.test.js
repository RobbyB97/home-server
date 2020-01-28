import React from 'react'
import {shallow} from 'enzyme'

import Project from '../../../react/components/content/Project'


test('Render Project', () => {
    const wrapper = shallow(<Project />)
    
    expect(wrapper).toMatchSnapshot()
})