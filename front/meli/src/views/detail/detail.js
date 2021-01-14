import React from 'react';
import Loader from '../../components/Loader/Loader';
import Product from './product'
import useFetchDataItem from "../../hooks/useFetchDataItem";

function Detail() {
    const [product, categories, loading, notFound] = useFetchDataItem();     

    return ( 
        <>
            {(loading) 
            ? <Loader />
            : <Product product={product} categories={categories} notFound={notFound} />}
        </>        
    );
}

export default Detail;
