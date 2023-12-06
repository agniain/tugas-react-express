const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'ID is required.']
    },
    name: {
        type: String,
        required: [true, 'Product name is required.'],
        minLength: [2, 'Product name must be at least 2 characters.'],
        maxLength: [70, 'Product name cannot exceed 70 characters.']
    },
    price: {
        type: Number,
        required: [true, 'Price is required.'],
        min: [10000, 'Price must be at least 10000.'],
        max: [100000000, 'Price cannot exceed 100000000.']
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required.'],
        min: [1, 'Stock must be at least 1.'],
        max: [1000, 'Stock cannot exceed 1000.']
    },
    status: {
        type: Boolean,
        default: true
    },

});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;