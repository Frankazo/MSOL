const mix = require('laravel-mix')

const sassGlobImporter = require('node-sass-glob-importer')

mix.setPublicPath('src')

mix.sass('src/assets/scss/main.scss', 'src', {
    sassOptions: {
        importer: sassGlobImporter()
    }
}).options({
    processCssUrls: false
})

mix.sourceMaps()
