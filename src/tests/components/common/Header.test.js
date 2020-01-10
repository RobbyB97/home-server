import React from 'react'
import {shallow} from 'enzyme'

import {Header} from '../../../react/components/common/Header'


let wrapper

beforeEach(() => {
    wrapper = shallow(<Header />)
})


test('Render Header', () => {
    expect(wrapper).toMatchSnapshot()
})