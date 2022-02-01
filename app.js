const express = require('express')
const app = express()
const bodyParser = require('body-parser') // non-multipart data middleware
const multer = require('multer') // multipart handling module
const fileHandler = multer()
const config = require('./config')
const TrimInputs = require('./middlewares/TrimInputs')
const i18next = require('i18next')
const i18nextMiddleware = require('i18next-express-middleware')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(TrimInputs)
app.listen(config.PORT)

require('./routes')(app, fileHandler)
