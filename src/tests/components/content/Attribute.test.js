import React from 'react'
import {shallow} from 'enzyme'

import Attribute from '../../../react/components/content/Attribute'


test('Render Attribute without props', () => {
    const wrapper = shallow(<Attribute/>)

    expect(wrapper).toMatchSnapshot()
})