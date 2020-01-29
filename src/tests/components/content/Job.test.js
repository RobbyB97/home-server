import React from 'react'
import {shallow} from 'enzyme'

import {Job} from '../../../react/components/content/Job'
import jobs from '../../fixtures/jobs'


test('Render inactive Job with no props', () => {
    const wrapper = shallow(<Job/>)

    expect(wrapper).toMatchSnapshot()
})