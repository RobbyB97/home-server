import React from 'react'
import {shallow} from 'enzyme'

import {WildCard} from '../../../react/components/pages/WildCard'


test('Render WildCard', () => {
    const wrapper = shallow(<WildCard/>)

    expect(wrapper).toMatchSnapshot()
})