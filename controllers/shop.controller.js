const Shop = require('../models/shop');

const getShops = async (req, res) => {
    const shops = await Shop.find({}).populate('goods');
    if (!shops) {
        return res.status(404).json({message: 'Not found shops'});
    }
    res.status(200).json(shops);
}

module.exports = {getShops}