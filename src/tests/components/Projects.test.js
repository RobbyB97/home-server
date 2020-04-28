import React from 'react'
import { shallow } from 'enzyme'

import { Projects } from '../../react/components/Projects'


test('Render Projects', () => {
    const wrapper = shallow(<Projects />)
    expect(wrapper).toMatchSnapshot()
})