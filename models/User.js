const connection = require('../database').system

var schema = {
    username: {
        type: String, unique: true, required: true,
    },
    email: {
        type: String, unique: true, required: true,
    },
    first_name: {
        type: String, default: null,
    },
    middle_name: {
        type: String, default: null,
    },
    last_name: {
        type: String, default: null,
    },
    full_name_style: {
        type: String, enum: ['FML', 'LMF'], default: 'FML',
    },
    password: {
        type: String, required: true, select: false,
    },
    deleted_at: {
        type: Date, default: null,
    },
}

const User = connection.models.User || connection.model('User', schema)
module.exports = User
