const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
//  mix.combine([
//     'resources/js/app.js',
//     'resources/js/Themes/vendor/echarts.min.js',
//     'resources/js/Themes/es5/echart.options.min.js',
//     ], 'public/js/app.js');
mix.js('resources/js/app.js', 'public/js')
mix.react()
    .sass('resources/sass/app.scss', 'public/css', [
        //
    ]);

// mix.browserSync('laravelinertia.me:70');
