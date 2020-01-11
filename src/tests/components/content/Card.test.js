import React from 'react'
import {shallow} from 'enzyme'

import Card from '../../../react/components/content/Card'


let wrapper

beforeEach(() => {
    wrapper = shallow(
        <Card 
            image="Image!"
            title="Title!"
            subtext="Subtext!"
            link="Link!"
        />
    )
})


test('Render Card', () => {
    expect(wrapper).toMatchSnapshot()
})