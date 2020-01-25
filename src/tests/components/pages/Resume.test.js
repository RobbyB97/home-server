import React from 'react'
import {shallow} from 'enzyme'

import {Resume} from '../../../react/components/pages/Resume'


test('Render Resume page', () => {
    const wrapper = shallow(<Resume/>)

    expect(wrapper).toMatchSnapshot()
})