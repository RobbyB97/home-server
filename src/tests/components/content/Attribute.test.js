import React from 'react'
import {shallow} from 'enzyme'

import Attribute from '../../../react/components/content/Attribute'
import attributes from '../../fixtures/attributes'


test('Render Attribute without props', () => {
    const wrapper = shallow(<Attribute/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render Attribute with all props', () => {
    const wrapper = shallow(
        <Attribute 
            {...attributes[0]}
        />
    )

    expect(wrapper).toMatchSnapshot()
})


test('Render Attribute with some props', () => {
    const wrapper = shallow(
        <Attribute 
            {...attributes[1]}
        />
    )

    expect(wrapper).toMatchSnapshot()
})