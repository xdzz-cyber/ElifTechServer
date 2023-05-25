const express = require('express');
const {getShops} = require("../controllers/shop.controller");
const router = express.Router();

router.get('/', getShops);

module.exports = router;