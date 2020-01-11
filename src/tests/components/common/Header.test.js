import React from 'react'
import {shallow} from 'enzyme'

import {Header} from '../../../react/components/common/Header'


let wrapper, goHome, toggleNav

beforeEach(() => {
    goHome = jest.fn()
    toggleNav = jest.fn()

    wrapper = shallow(
        <Header 
            goHome={goHome}
            toggleNav={toggleNav}
        />
    )
})


test('Render Header', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Navigation button toggle', () => {
    wrapper.find('.header__nav-button').simulate('click')

    expect(toggleNav).toHaveBeenCalled()
})


test('Home button', () => {
    wrapper.find('NavLink').simulate('click')

    expect(goHome).toHaveBeenCalled()
})