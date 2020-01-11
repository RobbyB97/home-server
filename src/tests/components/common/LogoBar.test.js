import React from 'react'
import {shallow} from 'enzyme'

import LogoBar from '../../../react/components/common/LogoBar'


test('Render LogoBar', () => {
    const wrapper = shallow(<LogoBar />)

    expect(wrapper).toMatchSnapshot()
})