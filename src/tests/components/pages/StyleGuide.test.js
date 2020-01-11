import React from 'react'
import {shallow} from 'enzyme'

import StyleGuide from '../../../react/components/pages/StyleGuide'


let wrapper

beforeEach(() => {
    wrapper = shallow(<StyleGuide />)
})


test('Render Style Guide page', () => {
    expect(wrapper).toMatchSnapshot()
})