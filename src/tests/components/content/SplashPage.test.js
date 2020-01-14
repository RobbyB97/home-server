import React from 'react'
import {shallow} from 'enzyme'

import {SplashPage} from '../../../react/components/content/SplashPage'


test('Render SplashPage', () => {
    const wrapper = shallow(<SplashPage />)

    expect(wrapper).toMatchSnapshot()
})


test('Trigger splashOff', () => {
    const splashOff = jest.fn()
    const wrapper = shallow(
        <SplashPage 
            splashOff={splashOff}    
        />
    )
    wrapper.find('.splash__to-site').simulate('click')

    expect(splashOff).toHaveBeenCalled()
})