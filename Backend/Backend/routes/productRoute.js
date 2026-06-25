const express = require("express");
const router = express.Router();
const {getProduct, postProduct, deleteProduct, putProduct, getsingleProduct} = require("../controller/productController.js");

router.get('/',getProduct);
router.get('/:id',getsingleProduct)
router.post('/', postProduct);
router.delete('/:id', deleteProduct);
router.put('/:id',putProduct);

module.exports = router;