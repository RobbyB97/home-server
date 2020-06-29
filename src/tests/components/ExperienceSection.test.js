import React from 'react';
import {shallow} from 'enzyme';

import {ExperienceSection} from '../../react/components/ExperienceSection';
import experienceSections from '../fixtures/experienceSections';


test('Render ExperienceSection without props', () => {
    const wrapper = shallow(<ExperienceSection />);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExperienceSection with logo', () => {
    const wrapper = shallow(<ExperienceSection {...experienceSections[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExperienceSection with company', () => {
    const wrapper = shallow(<ExperienceSection {...experienceSections[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExperienceSection with job title', () => {
    const wrapper = shallow(<ExperienceSection {...experienceSections[2]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExperienceSection with description', () => {
    const wrapper = shallow(<ExperienceSection {...experienceSections[3]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExperienceSection with start date', () => {
    const wrapper = shallow(<ExperienceSection {...experienceSections[4]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExperienceSection with start and end date', () => {
    const wrapper = shallow(<ExperienceSection {...experienceSections[5]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExperienceSection with all props', () => {
    const wrapper = shallow(<ExperienceSection {...experienceSections[6]}/>);
    expect(wrapper).toMatchSnapshot();
});
