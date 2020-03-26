import React from 'react'
import {shallow} from 'enzyme'

import HomeIcon from '../../../react/components/content/HomeIcon'
import homeicons from '../../fixtures/homeicons'


test('Render HomeIcon without props', () => {
    const wrapper = shallow(<HomeIcon {...homeicons[0]} />)

    expect(wrapper).toMatchSnapshot()
})


test('Render HomeIcon with props', () => {
    const wrapper = shallow(<HomeIcon {...homeicons[1]} />)
})