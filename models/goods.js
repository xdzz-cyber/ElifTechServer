const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Goods = mongoose.model('Goods', goodsSchema);

module.exports = Goods;
