import React from 'react';
import {shallow} from 'enzyme';
import View from '../results';

describe('test searchBox component', () => {
    test('renders without crashing', () => {
        const wrapper = shallow(<View searchParam={'batman'}/>);
        expect(wrapper).toMatchSnapshot();
    });    
});
