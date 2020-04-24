import React from 'react'
import {shallow} from 'enzyme'

import {Portfolio} from '../../react/pages/Portfolio'


test('Render Portfolio', () => {
    const wrapper = shallow(<Portfolio />)
    expect(wrapper).toMatchSnapshot()
})