import { useState, useEffect } from "react";
import MeliService from '../services/meli.service';

export const useFetchDataItem = () => {
    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setLoading(true);
        const id = window.location.pathname.split("/").pop();
        MeliService.getDetailProducts(id)
        .then(response => response.json())
        .then(data => {
            if (data.code===200) {
                setCategories(data.data.item.categories);
                setProduct(data.data.item);
            } else {
                setNotFound(true);
            }            

            setLoading(false);
        }); 
    }, []);

    return [product, categories, loading, notFound];
};

export default useFetchDataItem;