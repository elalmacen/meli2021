const url = require('url');
const _ = require('lodash');
const { MESSAGES } = require('../constants');
const ItemService = require('../services/ItemService');
const SearchService = require('../services/SearchService');
const { errorResponse, successResponse } = require('../helpers/responses');

class MeliController {
  static async search(req, res) {
    const { q } = url.parse(req.url, true).query;

    if (!q) {
      return errorResponse({ res, error: MESSAGES.WRONG_PARAMS, code: 400 });
    }

    try {
      const items = await SearchService.search(q);
      return successResponse({ res, data: items });
    } catch (err) {
      return errorResponse({ res, error: err.message });
    }
  }

  static async detail(req, res) {
    if (!req.params.id) {
      return errorResponse({ res, error: MESSAGES.WRONG_PARAMS, code: 400 });
    }

    try {
      const itemId = req.params.id;
      const item = await ItemService.getItemById(itemId);
      return successResponse({ res, data: item });
    } catch (err) {
      const code = _.get(err, 'code', 500);
      return errorResponse({ res, error: err.message, code });
    }
  }
}

module.exports = MeliController;
