import React from 'react'
import {shallow} from 'enzyme'

import {PrevPage} from '../../../react/components/common/PrevPage'
import nextpages from '../../fixtures/nextpages'


test('Render PrevPage with no props', () => {
    const wrapper = shallow(<PrevPage />)

    expect(wrapper).toMatchSnapshot()
})


test('Render PrevPage with text', () => {
    const wrapper = shallow(<PrevPage {...nextpages[0]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render PrevPage with route', () => {
    const wrapper = shallow(<PrevPage {...nextpages[1]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render PrevPage with all props', () => {
    const wrapper = shallow(<PrevPage {...nextpages[2]}/>)

    expect(wrapper).toMatchSnapshot()
})