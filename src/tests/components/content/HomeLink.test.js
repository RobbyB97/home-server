import React from 'react'
import {shallow} from 'enzyme'

import HomeLink from '../../../react/components/content/HomeLink'
import homelinks from '../../fixtures/homelinks'


test('Render internal HomeLink without props', () => {
    const wrapper = shallow(<HomeLink />)

    expect(wrapper).toMatchSnapshot()
})


test('Render internal HomeLink with icon', () => {
    const wrapper = shallow(<HomeLink {...homelinks[0]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render internal HomeLink with linkText', () => {
    const wrapper = shallow(<HomeLink {...homelinks[1]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render external HomeLink', () => {
    const wrapper = shallow(<HomeLink {...homelinks[2]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render external HomeLink with icon', () => {
    const wrapper = shallow(<HomeLink {...homelinks[3]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render external HomeLink with linkText', () => {
    const wrapper = shallow(<HomeLink {...homelinks[4]}/>)

    expect(wrapper).toMatchSnapshot()
})