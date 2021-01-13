const { AUTHOR } = require('../constants');

const dtoAttrs = {
  author: {
    name: null,
    lastname: null,
  },
  item: {
    id: null,
    title: null,
    picture: null,
    condition: null,
    free_shipping: null,
    sold_quantity: null,
    description: null,
    categories: null,
    price: {
      currency: null,
      amount: null,
      decimals: null,
    },
  },
};

const ItemDTO = {

  buildFromResponse(itemResponse) {
    const dto = { ...dtoAttrs };

    dto.item.id = itemResponse.data.id;
    dto.author = AUTHOR.FULL_NAME;
    dto.item.title = itemResponse.data.title;
    dto.item.picture = itemResponse.data.thumbnail;
    dto.item.condition = itemResponse.data.condition;
    dto.item.free_shipping = itemResponse.data.shipping.free_shipping;
    dto.item.sold_quantity = itemResponse.data.sold_quantity;
    dto.item.categories = itemResponse.data.categories;
    dto.item.price.amount = Math.trunc(itemResponse.data.price);
    dto.item.price.currency = itemResponse.data.currency_id;
    dto.item.price.decimals = Math.trunc((itemResponse.data.price % 1) * 100);
    return dto;
  },

};

module.exports = ItemDTO;
