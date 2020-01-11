import React from 'react'
import {shallow} from 'enzyme'

import {Skills} from '../../../react/components/pages/Skills'


let wrapper

beforeEach(() => {
    wrapper = shallow(<Skills />)
})


test('Render Skills page', () => {
    expect(wrapper).toMatchSnapshot()
})