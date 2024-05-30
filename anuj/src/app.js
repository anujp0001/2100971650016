const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const apiRoutes = require('./routes/apiRoutes');
const productService = require('./services/productService');
const config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use('/api', apiRoutes);

// Fetch and store products on server start (optional)
productService.fetchAndStoreProducts();

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
