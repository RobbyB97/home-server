import React from 'react'
import {shallow} from 'enzyme'

import {Home} from '../../../react/components/pages/Home'


test('Render Home page', () => {
    const wrapper = shallow(<Home/>)

    expect(wrapper).toMatchSnapshot()
})