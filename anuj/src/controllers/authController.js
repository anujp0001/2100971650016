const axios = require('axios');
const config = require('../config');

const register = async (req, res) => {
    try {
        const response = await axios.post(config.registerUrl, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const authenticate = async (req, res) => {
    try {
        const response = await axios.post(config.authUrl, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register, authenticate };
