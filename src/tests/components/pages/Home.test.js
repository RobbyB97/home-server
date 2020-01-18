import React from 'react'
import {shallow} from 'enzyme'

import {Home} from '../../../react/components/pages/Home'


let wrapper, attributesFadeIn

beforeEach(() => {
    attributesFadeIn = jest.fn()
    wrapper = shallow(
        <Home 
            attributesFadeIn={attributesFadeIn} 
            test={true}  
        />
    )
})


test('Render Home page', () => {
    expect(wrapper).toMatchSnapshot()
})