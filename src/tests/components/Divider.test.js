import React from 'react'
import { shallow } from 'enzyme'

import { Divider } from '../../react/components/Divider'


test('Render Divider', () => {
    const wrapper = shallow(<Divider />)
    expect(wrapper).toMatchSnapshot()
})