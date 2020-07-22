const path = require('path');

module.exports = {
    pages: {
        index: {
            entry: 'src/app/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Vuestic Admin',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
    },
    publicPath: '/',
}
