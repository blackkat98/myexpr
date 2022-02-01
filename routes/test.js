module.exports = (app, fileHandler) => {
    const prefix = '/test'

    app.get(prefix + '/get', (req, res) => {
        res.json({
            status: 'success',
            data: null,
        })
    })

    app.post(prefix + '/post', fileHandler.single('file'), (req, res) => {
        console.log(req.file)
        res.json({
            status: 'success',
            data: req.body,
        })
    })
}
