import React from 'react'
import {shallow} from 'enzyme'

import HomeIcon from '../../../react/components/content/HomeIcon'


test('Render HomeIcon without props', () => {
    const wrapper = shallow(<HomeIcon />)

    expect(wrapper).toMatchSnapshot()
})