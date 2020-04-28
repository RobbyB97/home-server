import React from 'react'
import { shallow } from 'enzyme'

import { Contact } from '../../react/components/Contact'


test('Render Contact', () => {
    const wrapper = shallow(<Contact />)
    expect(wrapper).toMatchSnapshot()
})