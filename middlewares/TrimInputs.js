var TrimInputs = (req, res, next) => {
    const untouched = [
        'password',
    ]

    for (let key in req.body || {}) {
        if (!untouched.includes(key)) {
            req.body[key] = req.body[key].trim()
        }
    }

    next()
}

module.exports = TrimInputs
