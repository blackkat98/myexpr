var bcrypt = require('bcrypt')

module.exports = {
    encrypt: (password) => {
        let salt = bcrypt.genSaltSync()

        return bcrypt.hashSync(password, salt)
    },
    compare: (password, encryptedString) => {
        return bcrypt.compareSync(password, encryptedString)
    },
}
