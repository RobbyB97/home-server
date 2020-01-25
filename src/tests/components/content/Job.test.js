import React from 'react'
import {shallow} from 'enzyme'

import {Job} from '../../../react/components/content/Job'
import jobs from '../../fixtures/jobs'


test('Render Job with only title', () => {
    const wrapper = shallow(<Job {...jobs[0]}/>)

    expect(wrapper).toMatchSnapshot()
})


test('Render Job with all props', () => {
    const wrapper = shallow(<Job {...jobs[1]}/>)

    expect(wrapper).toMatchSnapshot()
})