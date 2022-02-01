const AuthController = require('../controllers/AuthController')

module.exports = (app, fileHandler) => {
    const prefix = '/auth'

    app.post(prefix + '/register', fileHandler.none(), AuthController.register)

    app.post(prefix + '/login', fileHandler.none(), AuthController.login)
}
