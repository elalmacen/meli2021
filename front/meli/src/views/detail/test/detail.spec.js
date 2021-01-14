import React from 'react';
import {shallow} from 'enzyme';
import View from '../detail';

describe('test detail/detail view', () => {
    test('renders without crashing', () => {
        const wrapper = shallow(<View />);
        expect(wrapper).toMatchSnapshot();
    });    
});
