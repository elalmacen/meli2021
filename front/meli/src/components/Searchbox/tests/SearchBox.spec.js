import React from 'react';
import {shallow} from 'enzyme';
import SearchBox from '../SearchBox';

let assignMock = jest.fn();

delete window.location;
window.location = { assign: assignMock };

afterEach(() => {
  assignMock.mockClear();
});

describe('test searchBox component', () => {
    test('renders without crashing', () => {
        const wrapper = shallow(<SearchBox />);
        expect(wrapper).toMatchSnapshot();
    });

    test('search empty query', () => {
        const wrapper = shallow(<SearchBox />);
        wrapper.find('button').simulate('click');
        expect(window.location.assign).toBeCalledWith('/items?search=');    
    });

    test('search meli query', () => {
        const wrapper = shallow(<SearchBox />);
        wrapper.find('input').simulate('change', {target: {value: "MLA1"}});
        wrapper.find('button').simulate('click');
        expect(window.location.assign).toBeCalledWith('/items/MLA1');
    });

    test('go home', () => {
        const wrapper = shallow(<SearchBox />);
        expect(wrapper).toMatchSnapshot();
        wrapper.find('.logo').simulate('click');    
    });
    
});
