const connection = require('../database').system

var schema = {
    token: {
        type: String, required: true
    },
    refresh_token: {
        type: String, required: true
    },
    created_at: {
        type: Date, default: Date.now(),
    },
}

const AccessToken = connection.models.AccessToken || connection.model('AccessToken', schema)
module.exports = AccessToken
