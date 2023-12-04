const router = require('express').Router();
const productController = require('./controller');

router.get('/product', productController.index);
router.get('/product/:name', productController.view);
router.post('/product', productController.store);
router.put('/product/:name', productController.update);
router.delete('/product/:name', productController.destroy);

module.exports = router;