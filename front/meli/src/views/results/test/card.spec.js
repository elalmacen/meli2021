import React from 'react';
import {shallow} from 'enzyme';
import View from '../card';

describe('test searchBox component', () => {
    test('renders with product', () => {
        const product = {
            id: 12,
            picture: "https://http2.mlstatic.com/D_NQ_NP_848472-MLA43108239303_082020-O.webp",
            free_shipping : 'price free',
            price : {
                amount: 20,
                decimals: 1
            },
            title: "batman",
            region: "Villa del parque"

        };
        const wrapper = shallow(<View product={product}/>);
        expect(wrapper).toMatchSnapshot();
    });    
});
