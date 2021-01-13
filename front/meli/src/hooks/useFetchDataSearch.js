import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import MeliService from '../services/meli.service';

export const useFetchDataSearch = (props) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);        
        const term = queryString.parse(props.props.location.search);
        const query = term.search;
        MeliService.searchProducts(query)
        .then(response => response.json())
        .then(data => {            
            setProducts(data.data.items);
            setCategories(data.data.categories);
            setLoading(false);
        });        
    }, [props.props.location.search]);

    return [products, categories, loading];
};

export default useFetchDataSearch;