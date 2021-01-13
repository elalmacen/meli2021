const _ = require('lodash');
const axios = require('axios');
const ItemDTO = require('../dtos/ItemDTO');
const { MELI } = require('../constants');

class ItemService {
  static async getItemById(id) {
    const itemResponse = await this.getItem(id);
    if (!itemResponse) {
      throw { code: 404, message: MELI.ITEM_NOT_FOUND_MESSAGE };
    }

    const categories = await this.getCategories(itemResponse);
    const itemDTO = ItemDTO.buildFromResponse(itemResponse);
    itemDTO.item.description = await this.getDescription(id);
    itemDTO.item.categories = categories;

    return itemDTO;
  }

  static async getItem(id) {
    const url = `${MELI.API_URL}/items/${id}`;
    try {
      const item = await axios.get(url);
      return item;
    } catch (error) {
      const statusCode = _.get(error, 'response.status');
      if (statusCode === MELI.SEARCH_NOT_FOUND_CODE) {
        return null;
      }
    }
  }

  static async getDescription(id) {
    const url = `${MELI.API_URL}/items/${id}/description`;
    try {
      const response = await axios.get(url);
      const description = _.get(response, 'data.plain_text', null);
      return description;
    } catch (error) {
      const statusCode = _.get(error, 'response.status');
      if (statusCode === MELI.SEARCH_NOT_FOUND_CODE) {
        return null;
      }
    }
  }

  static async getCategories(data) {
    const categoryId = data.data.category_id;
    const categoriesUrl = `${MELI.API_URL}/categories/${categoryId}`;
    const response = await axios.get(categoriesUrl);
    const categories = response.data.path_from_root.map((row) => {
      return row.name;
    });
    return categories;
  }
}

module.exports = ItemService;
