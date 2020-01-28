import React from 'react'
import {shallow} from 'enzyme'

import {Project} from '../../../react/components/content/Project'
import projects from '../../fixtures/projects'


let wrapper, toggleOn, toggleOff

beforeEach(() => {
    toggleOn = jest.fn()
    toggleOff = jest.fn()

    wrapper = shallow(
        <Project 
            toggleOn={toggleOn}
            toggleOff={toggleOff}
        />
    )
})


test('Render inactive Project without props', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Render active Project without props', () => {
    wrapper.find('.project').simulate('mouseEnter')

    expect(wrapper).toMatchSnapshot()
})


test('Activate toggleOn on mouseEnter', () => {
    expect(wrapper.state('active')).toBe(false)
    wrapper.find('.project').simulate('mouseEnter')

    expect(wrapper.state('active')).toBe(true)
})


test('Active toggleOff on mouseLeave', () => {
    wrapper.find('.project').simulate('mouseEnter')
    expect(wrapper.state('active')).toBe(true)
    wrapper.find('.project').simulate('mouseLeave')

    expect(wrapper.state('active')).toBe(false)
})


test('Render Project with name', () => {
    wrapper = shallow(<Project {...projects[0]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render Project with languages', () => {
    wrapper = shallow(<Project {...projects[1]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render Project with description', () => {
    wrapper = shallow(<Project {...projects[2]}/>)
    wrapper.find('.project').simulate('mouseEnter')

    expect(wrapper).toMatchSnapshot()
})


test('Render Project with link', () => {
    wrapper = shallow(<Project {...projects[3]}/>)
    wrapper.find('.project').simulate('mouseEnter')

    expect(wrapper).toMatchSnapshot()
})


test('Render Project with link and linkText', () => {
    wrapper = shallow(<Project {...projects[4]}/>)
    wrapper.find('.project').simulate('mouseEnter')

    expect(wrapper).toMatchSnapshot()
})



