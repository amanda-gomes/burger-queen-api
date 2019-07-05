const router = require('express').Router();
const Products = require('../controllers/products');

router.get('/',Products.getProducts);
router.get('/:id',Products.getProductById);
router.post('/',Products.postProduct);
router.put('/:id',Products.putProduct);
router.delete('/:id',Products.deleteProduct);

module.exports = router;