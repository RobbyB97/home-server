import React from 'react'
import {shallow} from 'enzyme'

import {Footer} from '../../../react/components/common/Footer'


test('Render Footer', () => {
    const wrapper = shallow(<Footer/>)

    expect(wrapper).toMatchSnapshot()
})