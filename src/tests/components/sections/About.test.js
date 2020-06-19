import React from 'react'
import {shallow} from 'enzyme'

import {About} from '../../../react/components/sections/About'


test('Render About', () => {
    const wrapper = shallow(<About />)
    expect(wrapper).toMatchSnapshot()
})