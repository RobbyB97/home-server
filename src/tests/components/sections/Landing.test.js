import React from 'react';
import {shallow} from 'enzyme';

import {Landing} from '../../../react/components/sections/Landing';


test('Render Landing', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
});