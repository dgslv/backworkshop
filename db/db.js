mongoose = require('mongoose');
const config = require('../config/config')
const DB_URL = process.env.DB_URL || config.db;

const connect = async () => {
    db = mongoose.createConnection(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
    })

    return {
        db,
    }
}

module.exports = {
    connect,
}