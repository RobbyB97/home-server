import React from 'react'
import {shallow} from 'enzyme'

import {Page404} from '../../../react/components/pages/Page404'


test('Render WildCard', () => {
    const wrapper = shallow(<Page404/>)

    expect(wrapper).toMatchSnapshot()
})