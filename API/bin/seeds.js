require('dotenv').config();
const mongoose = require('mongoose');
const Local = require('../models/locals.model');
const localData = require('../data/Locals.json');

require('../configs/db.config');

mongoose.connection.once('open', () => {
    console.info(`Successfully connected to database ${mongoose.connection.db.databaseName}`);
    mongoose.connection.db.dropCollection('locals')
    .then(() => {
        console.info('Borrada coleccion de locales');
        return Local.create(localData);
    })
    .then((locals) => console.info(`- ${locals.length} Locales Creados!`))
    .catch((error) => console.error(error))
    .finally(() => process.exit(0))
});


