const mongoose = require('mongoose')
const config = require('./config')
const connectToDb = (driverType, host, port, dbName, username, password) => {
    switch (driverType) {
        case 'mongodb':
            return mongoose.createConnection(`mongodb://${host}:${port}/${dbName}`, {
                user: username,
                pass: password,
            }, () => {
                console.log(`Successfully connected to ${dbName} (${driverType}) at ${host}:${port}`)
            })
        default:
            throw new Error('Unrecognizable DB driver')
    }
}

const connectionPool = {
    system: connectToDb(
        config.DB_CONNECTION,
        config.DB_HOST,
        config.DB_PORT,
        config.DB_DATABASE,
        config.DB_USERNAME,
        config.DB_PASSWORD
    ),
}

module.exports = connectionPool
