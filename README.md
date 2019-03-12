# My webpack.mix.js file..
```
let mix = require('laravel-mix');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const svgSpriteDestination = "../addons/default/anomalylabs/pyrocms-theme/resources/views/partials/svgs.twig";
const svgSourcePath = "addons/default/anomalylabs/pyrocms-theme/resources/svgs/*.svg";

//mix.setPublicPath(path.normalize('./addons/default/anomalylabs/pyrocms-theme/resources/dist/'));
mix.js('/Users/pixney/Development/Web/Ryan/addons/default/anomalylabs/pyrocms-theme/resources/js/app.js', 'js')
.sass('/Users/pixney/Development/Web/Ryan/addons/default/anomalylabs/pyrocms-theme/resources/sass/theme.scss', 'css')
.webpackConfig({
    plugins: [
       new SVGSpritemapPlugin(
          svgSourcePath, {
             output: {
                filename: svgSpriteDestination,
                svgo: true
             },
             sprite: {
                prefix: false
            },
          }
       )
    ]
 })
.sourceMaps().version().browserSync('ryan.test');
```