const express = require('express');
const MeliController = require('../controllers/MeliController');

const router = express.Router();

// routers
router.get('/items', MeliController.search);
router.get('/items/:id', MeliController.detail);

module.exports = router;
