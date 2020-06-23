import React from 'react';
import { shallow } from 'enzyme';

import { Projects } from '../../../react/components/sections/Projects';


test('Render Projects', () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper).toMatchSnapshot();
});