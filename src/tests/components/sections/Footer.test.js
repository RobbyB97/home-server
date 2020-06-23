import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '../../../react/components/sections/Footer';


test('Render Projects', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});