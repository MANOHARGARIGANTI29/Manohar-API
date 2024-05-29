const express = require('express');

const router = express.Router();

const {GetallProducts,GetallProductsTesting}=require('../controllers/products');

router.route('/').get(GetallProducts);
router.route('/testing').get(GetallProductsTesting);


module.exports=router;