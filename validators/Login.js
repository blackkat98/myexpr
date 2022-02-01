const { body } = require('express-validator')

module.exports = body().custom(value => {
    if ((!value.username && !value.email) || !value.password) {
        return Promise.reject('Credential mismatched')
    }
})
