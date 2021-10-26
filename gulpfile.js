const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const del = require('del');

// const rename = require("gulp-rename");

const browserSync = require('browser-sync').create();




function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        },
        notify: false
    })
}

function htmlMove() {
    return src('app/*.html')
        .pipe(dest('dist/'))
        .pipe(browserSync.stream())
}

function fontsMove() {
    return src('app/fonts/**/*.*')
        .pipe(dest('dist/fonts'))
        .pipe(browserSync.stream())
}

// gulp scss - expanded - не сжимает, compressed - сжимает
function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('./dist/css'))
        .pipe(browserSync.stream())
}

function scriptLibs() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
        'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
        'node_modules/rateyo/src/jquery.rateyo.js',
        'node_modules/swiper/swiper-bundle.min.js',
        'node_modules/micromodal/dist/micromodal.js',
        // 'app/js/main.js'
    ])
        .pipe(concat('script.libs.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src('app/js/**/*.*')
    .pipe(dest('dist/js/'))
    .pipe(browserSync.stream())
}


function images() {
    return src('app/images/**/*.*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest('./dist/images'))
}


// function build() {
//     return src([
//         'app/**/*.html',
//         'app/css/style.min.css',
//         'app/fonts/*.*',
//         'app/js/main.min.js'
//     ], { base: 'app' })
//         .pipe(dest('dist'))
// }

function cleanDist() {
    return del('dist')
}

function watching() {
    watch(['app/scss/**/*.scss', 'app/scss/**/*.sass'], styles);
    watch(['app/js/**/*.js'], scripts);
    watch('app/images', images);
    // watch('app/**/*.html').on('change', browserSync.reload);
    watch('app/**/*.html', htmlMove);
    watch('app/fonts/**/*.*', fontsMove);
}



exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
// exports.staticMove = staticMove;

exports.build = series(cleanDist, images);

exports.default = parallel(series(cleanDist, htmlMove, fontsMove, styles, scriptLibs, scripts, images), watching, browsersync);
