const Cart = require('../models/cart');
const placeOrder = async (req, res) => {
    const {name, email, phone, address, goods, totalPrice} = req.body;

    if (!name || !email || !phone || !address || !goods || !totalPrice) {
        return res.status(400).json({message: 'Bad request'});
    }

    const cart = new Cart({
        name,
        email,
        phone,
        address,
        goods,
        totalPrice
    });

    await cart.save();
    res.status(201).json(cart);
}

module.exports = {placeOrder}