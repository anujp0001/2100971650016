const Product = require('../models/productModel');
const productService = require('../services/productService');

const getProducts = async (req, res) => {
    const { categoryname } = req.params;
    const { n = 10, page = 1, sort, order = 'asc' } = req.query;
    const limit = parseInt(n, 10);
    const skip = (page - 1) * limit;
    const sortOptions = {};

    if (sort) {
        sortOptions[sort] = order === 'asc' ? 1 : -1;
    }

    try {
        const products = await Product.find({ category: categoryname })
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductById = async (req, res) => {
    const { productid } = req.params;
    try {
        const product = await Product.findOne({ productId: productid });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getProducts, getProductById };
