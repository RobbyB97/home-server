import React from 'react'
import {shallow} from 'enzyme'

import JobCard from '../../../react/components/content/JobCard'


let wrapper

beforeEach(() => {
    wrapper = shallow(
        <JobCard 
            image="Image!"
            title="Title!"
            text="Text!"
        />
    )
})


test('Render JobCard with no props', () => {
    wrapper = shallow(<JobCard />)

    expect(wrapper).toMatchSnapshot()
})


test('Render JobCard with props', () => {
    wrapper = shallow(
        <JobCard 
            image="Image!"
            title="Title!"
            text="Text!"
        />
    )

    expect(wrapper).toMatchSnapshot()
})