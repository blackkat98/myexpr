require('custom-env').env()
const envState = process.env.NODE_ENV || 'development'
require('custom-env').env(envState)
const serverConfig = process.env
module.exports = serverConfig
