import React from 'react';
import {shallow} from 'enzyme';
import Loader from '../Loader';

test('renders without crashing', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
})
