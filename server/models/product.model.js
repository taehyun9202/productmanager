const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "product needs a title"],
        minlength: [3, "title must be 3 characters or longer"] 
    },
    price: { 
        type: Number,
        required: [true, "product needs price"],
    },
    description: {
        type: String,
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);