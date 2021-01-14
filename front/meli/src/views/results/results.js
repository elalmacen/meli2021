import React from 'react';
import ProductList from './productList';
import Loader from '../../components/Loader/Loader';
import useFetchDataSearch from "../../hooks/useFetchDataSearch";
import '../../App.scss';

function Results({searchParam}) {
    const [products, categories, loading] = useFetchDataSearch(searchParam);     

    return (
        <>            
            {(loading) 
            ? <Loader />
            : <ProductList products={products} categories={categories} /> }
        </>
    );
}

export default Results;
