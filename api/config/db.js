require('dotenv').config();
const mongoose = require('mongoose');
const config = require('./config');

module.exports = {
    connect: () => {
        mongoose.connect(config.dbURI, {
             useNewUrlParser: true, 
             useUnifiedTopology: true, 
             dbName: 'onboarding'    // Specifing the database name here
            })
            .then(() => console.log('Database connected'))
            .catch(err => console.log('Database connection error: ', err));
    }
};