import React from 'react';
import {shallow} from 'enzyme';
import BreadCrumb from '../BreadCrumb';


describe('test breadCrumb component', () => {
    test('renders without crashing', () => {
        const wrapper = shallow(<BreadCrumb />);
        expect(wrapper).toMatchSnapshot();
    });

    test('renders without crashing', () => {
        const categories = [
            'batman',
            'robin'
        ];
        const wrapper = shallow(<BreadCrumb categories={categories}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
