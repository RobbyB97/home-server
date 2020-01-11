import React from 'react'
import {shallow} from 'enzyme'

import {MobileNavigation} from '../../../react/components/common/MobileNavigation'


let wrapper, navHome, navNotHome

beforeEach(() => {
    navHome = jest.fn()
    navNotHome = jest.fn()
    wrapper = shallow(
        <MobileNavigation
            navHome={navHome}
            navNotHome={navNotHome}
        />
    )
})


test('Render MobileNavigation', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Call navHome', () => {
    wrapper.find('NavLink').at(0).simulate('click')

    expect(navHome).toHaveBeenCalled()
})


test('Call navNotHome', () => {
    wrapper.find('NavLink').at(1).simulate('click')

    expect(navNotHome).toHaveBeenCalled()
})