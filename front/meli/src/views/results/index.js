import React from 'react';
import ProductList from './productList';
import Loader from '../../components/Loader/Loader';
import useFetchDataSearch from "../../hooks/useFetchDataSearch";
import '../../App.scss';

function Results(props) {
    const [products, categories, loading] = useFetchDataSearch(props); 
    
    return (
        <>            
            {(loading) 
            ? <Loader />
            : <ProductList products={products} categories={categories} /> }
        </>
    );
}

export default Results;
