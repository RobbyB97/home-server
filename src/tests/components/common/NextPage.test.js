import React from 'react'
import {shallow} from 'enzyme'

import {NextPage} from '../../../react/components/common/NextPage'
import nextpages from '../../fixtures/nextpages'


test('Render NextPage with no props', () => {
    const wrapper = shallow(<NextPage />)

    expect(wrapper).toMatchSnapshot()
})


test('Render NextPage with text', () => {
    const wrapper = shallow(<NextPage {...nextpages[0]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render NextPage with route', () => {
    const wrapper = shallow(<NextPage {...nextpages[1]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render NextPage with all props', () => {
    const wrapper = shallow(<NextPage {...nextpages[2]}/>)

    expect(wrapper).toMatchSnapshot()
})