import React from 'react'
import {shallow} from 'enzyme'

import HomeIcons from '../../../react/components/content/HomeIcons'


test('Render HomeIcons without icons', () => {
    const wrapper = shallow(<HomeIcons />)

    expect(wrapper).toMatchSnapshot()
})