import React from 'react'
import {shallow} from 'enzyme'

import {HomeButton} from '../../../react/components/ui/HomeButton'


test('Render HomeButton', () => {
    const wrapper = shallow(<HomeButton />)
    expect(wrapper).toMatchSnapshot()
})