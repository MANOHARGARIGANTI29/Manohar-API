require('dotenv').config();
const express = require('express');
const app = express();
const connectDB =require('./db/connection')
require('dotenv').config.PORT;
const products_router = require('./routes/products')
const PORT = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('iam live now');
})
app.use('/api/auth' ,products_router);
const start = async ()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`${PORT} iam connected`);
        })
    }
    catch(error){
        console.log(error);
    }
}
start();