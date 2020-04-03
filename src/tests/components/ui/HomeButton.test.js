import React from 'react'
import {shallow} from 'enzyme'

import {HomeButton} from '../../../react/components/ui/HomeButton'


test('Render HomeButton (external)', () => {
    const wrapper = shallow(<HomeButton />)
    expect(wrapper).toMatchSnapshot()
})


test('Render HomeButton (internal)', () => {
    const wrapper = shallow(<HomeButton internal />)
    expect(wrapper).toMatchSnapshot()
})