import React, { useState, useEffect } from "react";
import MeliService from '../services/meli.service';

export const useFetchDataItem = () => {
    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const id = window.location.pathname.split("/").pop();
        MeliService.getDetailProducts(id)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.code===200) {
                setCategories(data.data.item.categories);
                setProduct(data.data.item);
                setLoading(false);
            } else {
                setLoading(false);
                setNotFound(true);
            }            
        }); 
    }, []);

    return [product, categories, loading, notFound];
};

export default useFetchDataItem;