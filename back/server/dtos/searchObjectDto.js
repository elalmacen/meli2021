const itemDto = {
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
    price: {
      currency: null,
      amount: null,
      decimals: null,
    },
  },
};

module.exports = {
  itemDto,
};
