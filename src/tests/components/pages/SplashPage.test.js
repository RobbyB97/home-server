import React from 'react'
import {shallow} from 'enzyme'

import {SplashPage} from '../../../react/components/pages/SplashPage'


test('Render SplashPage', () => {
    const wrapper = shallow(<SplashPage test={true}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Trigger splashOff', () => {
    const splashOff = jest.fn()
    const wrapper = shallow(
        <SplashPage 
            test={true}
            splashOff={splashOff}    
        />
    )
    wrapper.find('.splash__to-site').simulate('click')

    expect(splashOff).toHaveBeenCalled()
})