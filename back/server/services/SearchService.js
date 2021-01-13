const axios = require('axios');
const { AUTHOR, MELI } = require('../constants');

class SearchService {
  static async search(id) {
    const items = await this.getItems(id);
    const categoriesFromRoot = await this.getCategoriesTree(items);

    const searchItems = {
      author: AUTHOR.FULL_NAME,
      categories: categoriesFromRoot,
      items: items.map((item) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.trunc(item.price),
          decimals: Math.trunc((item.price % 1) * 100),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        region: item.address.state_name,
      })),
    };

    return searchItems;
  }

  static async getItems(query) {
    const searchUrl = `${MELI.API_URL}/sites/MLA/search?q=/${query}&limit=4`;
    const response = await axios.get(searchUrl);
    return response.data.results;
  }

  static async getCategoriesTree(items) {
    if (items.length === 0) { return []; }

    const maxOccurCategoryId = items.sort((a, b) =>
      items.filter(v => v === a.category_id).length
      - items.filter(v => v === b.category_id).length,).pop().category_id;

    const categoriesUrl = `${MELI.API_URL}/categories/${maxOccurCategoryId}`;
    const response = await axios.get(categoriesUrl);
    const categories = response.data.path_from_root.map((row) => row.name);

    return categories;
  }
}

module.exports = SearchService;
