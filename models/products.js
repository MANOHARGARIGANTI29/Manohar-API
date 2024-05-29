const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:4.8
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","mi"],
            message:`{VALUE} is not supported`
        }
    }

})
module.exports= mongoose.model('Product',ProductSchema);