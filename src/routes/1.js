const { Router } = require('express');
const router = Router();
const _ = require('underscore');


const product1 = require('../product1.json');

router.get('/', (req, res) => {
    res.json(product1);
})
router.post('/', (req, res) => {
    const { id, title, image, price, description, sentence } = req.body;
    if (id && title && image && price && description && sentence) {
        const id = product1.length + 1;
        const newProduct = { ...req.body, id };
        product1.push(newProduct);
        res.json(product1);
    } else {
        res.send('error');
    }

});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        _.each(products, (product, i) => {
            if (product.id == id) {
                products.splice(i, 1);
            }
        });
        res.json(products);
    }
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, image, price, description, sentence } = req.body;
    if (id && title && image && price && description && sentence) {
        _.each(products, (product, i) => {
            if (product.id === id) {
                product.id = id;
                product.title = title;
                product.image = image;
                product.price = price;
                product.description = description;
                product.sentence = sentence;
            }
        });
        res.json(products);
    } else {
        res.status(500).json({ error: 'error' });
    }
});


module.exports = router;