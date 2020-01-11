import React from 'react'
import {shallow} from 'enzyme'

import {Home} from '../../../react/components/pages/Home'


let wrapper

beforeEach(() => {
    wrapper = shallow(<Home />)
})


test('Render Home page', () => {
    expect(wrapper).toMatchSnapshot()
})