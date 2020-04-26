import React from 'react'
import {shallow} from 'enzyme'

import {ContactForm} from '../../react/components/ContactForm'


test('Render ContactForm', () => {
    const wrapper = shallow(<ContactForm />)
    expect(wrapper).toMatchSnapshot()
})