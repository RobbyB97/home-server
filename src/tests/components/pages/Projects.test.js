import React from 'react'
import {shallow} from 'enzyme'

import {Projects} from '../../../react/components/pages/Projects'


let wrapper

beforeEach(() => {
    wrapper = shallow(<Projects />)
})


test('Render Projects page', () => {
    expect(wrapper).toMatchSnapshot()
})