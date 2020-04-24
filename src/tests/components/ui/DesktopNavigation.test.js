import React from 'react'
import {shallow} from 'enzyme'

import {DesktopNavigation} from '../../../react/components/ui/DesktopNavigation'


test('Render HomeButton', () => {
    const wrapper = shallow(<DesktopNavigation />)
    expect(wrapper).toMatchSnapshot()
})