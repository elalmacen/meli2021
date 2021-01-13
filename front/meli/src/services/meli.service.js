const API_URL = 'http://localhost:3011/api';

const searchProducts = async (query) => {
    return fetch(`${API_URL}/items?q=${query}`);    
};

const getDetailProducts = async (id) => {
    return fetch(`${API_URL}/items/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    searchProducts,
    getDetailProducts
};
