const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    goods: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Goods',
            required: true
        },
        selectedCount: {
            type: Number,
            required: true
        }
    }],
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number
    }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
