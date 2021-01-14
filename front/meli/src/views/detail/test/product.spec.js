import React from 'react';
import {shallow} from 'enzyme';
import View from '../product';

describe('test detail/product view', () => {
    test('renders without crashing', () => {
        const categories = ['batman','robin'];
        const product = {
            id: "MLA850382509",
            title: "Lorem Impsum",
            picture: "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
            condition: "new",
            free_shipping: true,
            sold_quantity: 0,
            description: "Lorem Impsum",
            categories: ['batman','robin'],
            price: {
                currency: "ARS",
                amount: 185000,
                decimals: 0
            }
        };

        const wrapper = shallow(<View product={product} categories={categories} notFound={false} />);
        expect(wrapper).toMatchSnapshot();
    });    
});
