import React from 'react'
import {shallow} from 'enzyme'

import {FixedModal} from '../../react/components/FixedModal'


test('Render FixedModal', () => {
    const wrapper = shallow(<FixedModal />)
    expect(wrapper).toMatchSnapshot()
})