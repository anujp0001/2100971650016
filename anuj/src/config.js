require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    mongodbUri: process.env.MONGODB_URI,
    registerUrl: process.env.REGISTER_URL,
    authUrl: process.env.AUTH_URL
};
