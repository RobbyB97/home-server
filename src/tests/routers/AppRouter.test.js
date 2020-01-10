import React from 'react'
import {shallow} from 'enzyme'

import {AppRouter} from '../../react/routers/AppRouter'


test('Render AppRouter', () => {
    const wrapper = shallow(<AppRouter />)

    expect(wrapper).toMatchSnapshot()
})