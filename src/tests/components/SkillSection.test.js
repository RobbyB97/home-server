import React from 'react';
import { shallow } from 'enzyme';

import { SkillSection } from '../../react/components/SkillSection';
import skillSections from '../fixtures/skillSections';


test('Render SkillSection without props', () => {
    const wrapper = shallow(<SkillSection />);
    expect(wrapper).toMatchSnapshot();
});

test('Render SkillSection with title', () => {
    const wrapper = shallow(<SkillSection {...skillSections[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render SkillSection with title and skills', () => {
    const wrapper = shallow(<SkillSection {...skillSections[1]}/>);
    expect(wrapper).toMatchSnapshot();
});