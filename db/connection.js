const mongoose = require('mongoose');
// password : 1hDndWlYVRMCJp4t
 const URI = process.env.MONGODB_URI;
const connectDB = ()=>{
    console.log('connection successfully')
    return mongoose.connect(URI)
}

module.exports=connectDB;