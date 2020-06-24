import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../../react/components/sections/Header';


test('Render Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});