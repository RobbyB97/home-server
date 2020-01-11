import React from 'react'
import {shallow} from 'enzyme'

import {Contact} from '../../../react/components/pages/Contact'


let wrapper

beforeEach(() => {
    wrapper = shallow(<Contact />)
})


test('Render Contact page', () => {
    expect(wrapper).toMatchSnapshot()
})