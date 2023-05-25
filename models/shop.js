const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    goods: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Goods',
        required: true
    }
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
