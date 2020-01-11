import React from 'react'
import {shallow} from 'enzyme'

import {Experience} from '../../../react/components/pages/Experience'


let wrapper

beforeEach(() => {
    wrapper = shallow(<Experience />)
})


test('Render Experience page', () => {
    expect(wrapper).toMatchSnapshot()
})