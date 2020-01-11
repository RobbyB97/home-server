import React from 'react'
import {shallow} from 'enzyme'

import {Article} from '../../../react/components/content/Article'


let wrapper

beforeEach(() => {
    wrapper = shallow(<Article />)
})


test('Render Article with no props', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Render Article with props', () => {
    wrapper = shallow(
        <Article 
            title='TITLE!'
            text='TEXT!'
        />
    )

    expect(wrapper).toMatchSnapshot()
})
