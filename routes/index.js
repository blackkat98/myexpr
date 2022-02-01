var fs = require('fs')

module.exports = (app, fileHandler) => {
    fs.readdirSync(__dirname).forEach(file => {
        if (file == 'index.js') return

        var name = file.substring(0, file.lastIndexOf('.'))
        require('./' + name)(app, fileHandler)
    })
}
