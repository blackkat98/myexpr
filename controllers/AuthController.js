const User = require('../models/User')

const UserRepository = require('../repositories/base')(User)

const passwordEncryptor = require('../utils/password_encryptor')

module.exports = {
    register: async (req, res) => {
        let data = {
            username: req.body.username,
            email: req.body.email,
            password: passwordEncryptor.encrypt(req.body.password),
        }
        let user = await UserRepository.store(data)

        if (user) {
            return res.status(200).json({
                success: true,
                code: 200,
                message: 'Registration succeeded',
            })
        }

        return res.status(500).json({
            success: false,
            code: 500,
            message: 'Registration failed',
        })
    },
    login: async (req, res) => {
        let password = req.body.password || null
        let username = null
        let credentialType = null

        if (req.body.username) {
            credentialType = 'username'
            username = req.body.username
        } else if (req.body.email) {
            credentialType = 'email'
            username = req.body.email
        }

        if (!username || !password) {
            return res.status(401).json({
                success: false,
                code: 401,
                message: 'Credential mismatched',
            })
        }

        let query = {
            deleted_at: null,
        }
        query[credentialType] = username
        let user = await UserRepository.getSingle(query, '+password')

        if (user && passwordEncryptor.compare(password, user.password)) {
            user = user.toJSON()
            user._id = undefined
            user.password = undefined

            return res.status(200).json({
                success: true,
                code: 200,
                message: 'Login succeeded',
                data: user,
            })
        }

        return res.status(401).json({
            success: false,
            code: 401,
            message: 'Credential mismatched',
        })
    },
}
