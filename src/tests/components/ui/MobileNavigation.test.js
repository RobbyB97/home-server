import React from 'react'
import {shallow} from 'enzyme'

import {MobileNavigation} from '../../../react/components/ui/MobileNavigation'


test('Render MobileNavigation', () => {
    const wrapper = shallow(<MobileNavigation />)
    expect(wrapper).toMatchSnapshot()
})