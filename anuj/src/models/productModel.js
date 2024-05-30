const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: String,
    name: String,
    category: String,
    price: Number,
    rating: Number,
    discount: Number,
    company: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
