import React from 'react'
import {shallow} from 'enzyme'

import {Skills} from '../../react/components/Skills'


test('Render Skills', () => {
    const wrapper = shallow(<Skills />)
    expect(wrapper).toMatchSnapshot()
})