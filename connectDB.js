
require('dotenv').config();
const connectDB = require('./db/connection');
const Product = require('./models/products');

const ProductJson = require('./Products.json');

const start =async()=>{
    try {
        await connectDB();
        await Product.create(ProductJson);
        console.log('success');    
    } catch (error) {
        console.log(error);
        
    }
    
};

start();


