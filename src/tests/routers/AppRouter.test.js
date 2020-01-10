import React from 'react'
import {shallow} from 'enzyme'

import {AppRouter} from '../../react/routers/AppRouter'


let toggleNavOff, wrapper

beforeEach(() => {
    toggleNavOff = jest.fn()
    wrapper = shallow(
        <AppRouter
            toggleNavOff={toggleNavOff}
        />
    )
})


test('Render AppRouter', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Toggle nav off on page click', () => {
    wrapper.find('#main-content').simulate('click')

    expect(toggleNavOff).toHaveBeenCalled()
})