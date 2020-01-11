import React from 'react'
import {shallow} from 'enzyme'

import {SplashPage} from '../../../react/components/content/SplashPage'


test('Render SplashPage', () => {
    const wrapper = shallow(<SplashPage />)

    expect(wrapper).toMatchSnapshot()
})