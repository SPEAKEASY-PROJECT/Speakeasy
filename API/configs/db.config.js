const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/speakeasy';

mongoose.connect(MONGODB_URI)
    .then(() =>console.info(`Successfully connected to the database ${MONGODB_URI}`))
    .catch((error) => console.error(`An error ocurred trying to the database: ${MONGODB_URI}`, error));
