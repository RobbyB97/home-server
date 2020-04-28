import React from 'react'
import { shallow } from 'enzyme'

import { Experience } from '../../react/components/Experience'


test('Render Experience', () => {
    const wrapper = shallow(<Experience />)
    expect(wrapper).toMatchSnapshot()
})