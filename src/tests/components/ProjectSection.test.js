import React from 'react';
import { shallow } from 'enzyme';

import { ProjectSection } from '../../react/components/ProjectSection';
import projectSections from '../fixtures/projectSections';


test('Render ProjectSection without props', () => {
    const wrapper = shallow(<ProjectSection />);
    expect(wrapper).toMatchSnapshot();
});

test('Render ProjectSection with logo', () => {
    const wrapper = shallow(<ProjectSection {...projectSections[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ProjectSection with name', () => {
    const wrapper = shallow(<ProjectSection {...projectSections[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ProjectSection with languages', () => {
    const wrapper = shallow(<ProjectSection {...projectSections[2]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ProjectSection with Github link', () => {
    const wrapper = shallow(<ProjectSection {...projectSections[3]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ProjectSection with website link', () => {
    const wrapper = shallow(<ProjectSection {...projectSections[4]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ProjectSection with custom links', () => {
    const wrapper = shallow(<ProjectSection {...projectSections[5]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ProjectSection with description', () => {
    const wrapper = shallow(<ProjectSection {...projectSections[6]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ProjectSection with all props', () => {
    const wrapper = shallow(<ProjectSection {...projectSections[7]}/>);
    expect(wrapper).toMatchSnapshot();
});