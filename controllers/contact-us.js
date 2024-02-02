const path = require('path')

const rootDir = require('../util/path');

exports.getContactUS = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'))
}

exports.postContactUs = (req, res, next) => {
    res.redirect('/');
}