const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['./images/*.{jpg,png}'], 'images', {
    plugins: [
        imageminJpegtran(),
        imageminPngquant({quality: '65-80'})
    ]
}).then(files => {
    console.log(files);
});