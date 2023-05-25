const Shop = require('../models/shop');
const Goods = require('../models/goods');
const seed = async () => {
    const shopsData = [
        {
            name: 'Shop 1',
            goods: [
                {
                    name: 'Item 1',
                    price: 10,
                    quantity: 10,
                    imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                },
                {
                    name: 'Item 2',
                    price: 20,
                    quantity: 20,
                    imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                },
            ]
        },
        {
            name: 'Shop 2',
            goods: [
                {
                    name: 'Item 3',
                    price: 15,
                    quantity: 15,
                    imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                },
                {
                    name: 'Item 4',
                    price: 25,
                    quantity: 25,
                    imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                },
            ]
        }
    ];

    try {
        // Clear existing data (optional)
        await Shop.deleteMany({});
        await Goods.deleteMany({});

        // Seed shops and associated goods
        for (const shopData of shopsData) {
            const goodsData = shopData.goods;

            const goods = await Goods.create(goodsData);

            const shop = await Shop.create({
                name: shopData.name,
                goods: goods.map((good) => good._id),
            });

            console.log(`Shop "${shop.name}" and associated goods created.`);
        }

        console.log('Data seeding completed.');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
}

module.exports = {seed}