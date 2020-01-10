import React from 'react'
import {shallow} from 'enzyme'

import DesktopNavigation from '../../../react/components/common/DesktopNavigation'


test('Render DesktopNavigation', () => {
    const wrapper = shallow(<DesktopNavigation />)
    
    expect(wrapper).toMatchSnapshot()
})