import React from 'react';
import { Container } from 'react-bootstrap';
import Card from './card';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

function ProductList({products, categories}) {        
    return (
        <>
            <BreadCrumb categories={categories} />
            <Container className="search-list">
            <ol>
                {
                    products.map((product, i) => {
                        return <Card key={i} product={product} />
                    })
                }
            </ol>
        </Container>
        </>        
    );
}

export default ProductList;
