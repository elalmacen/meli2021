import { useState, useEffect } from "react";
import queryString from 'query-string';
import MeliService from '../services/meli.service';

export const useFetchDataSearch = (searchParam) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const term = queryString.parse(searchParam);
        const query = term.search;
        MeliService.searchProducts(query)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProducts(data.data.items);
            setCategories(data.data.categories);
            setLoading(false);
        });        
    }, [searchParam]);

    return [products, categories, loading];
};

export default useFetchDataSearch;