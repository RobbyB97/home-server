import React from 'react';
import {shallow} from 'enzyme';

import {Experience} from '../../../react/components/sections/Experience';


test('Render About', () => {
    const wrapper = shallow(<Experience />);
    expect(wrapper).toMatchSnapshot();
});