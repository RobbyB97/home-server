import React from 'react'
import {shallow} from 'enzyme'

import HomeLink from '../../../react/components/content/HomeLink'


test('Render HomeLink', () => {
    const wrapper = shallow(<HomeLink />)

    expect(wrapper).toMatchSnapshot()
})