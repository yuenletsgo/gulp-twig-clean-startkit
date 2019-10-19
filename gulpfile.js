const config = require("./config.json");

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const flexibility = require('postcss-flexibility');
const svgSymbols = require('gulp-svg-symbols');
const htmlbeautify = require('gulp-html-beautify');
const tabify = require('gulp-tabify');
const twig = require('gulp-twig');

/**
 * Gulp Taks
 */

gulp.task('start', function() {
  browserSync.init(config.browserSync);
});

gulp.task('reload', function () {
  browserSync.reload();
});

gulp.task('build:css', function(){
  return gulp.src([config.paths.styles.src])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
	.pipe(sass())
	.pipe(autoprefixer('last 99 versions'))
	.pipe(postcss([flexibility]))
	.pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(config.paths.styles.dist))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.paths.styles.dist))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('build:js', function(){
	return gulp.src([
	  config.paths.scripts.src
	])
		.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}}))
		.pipe(concat('main.js'))
		// .pipe(gulp.dest(config.paths.scripts.dist))
		// .pipe(rename({suffix: '.min'}))
		// .pipe(uglify())
		.pipe(gulp.dest(config.paths.scripts.dist))
		.pipe(browserSync.reload({stream:true}))
  });

gulp.task('build:html', function () {
  return gulp.src(config.paths.html.src)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
	.pipe(twig())
	.pipe(htmlbeautify({
        "indent_size": 4
	}))
	.pipe(tabify(4, true))
    .pipe(gulp.dest(config.paths.html.dist))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('build:svgSymbols', function () {
	return gulp.src(config.paths.images.svg)
	.pipe(svgSymbols({templates: [`default-svg`]}))
	.pipe(rename({basename: 'sprite'}))
  .pipe(gulp.dest(config.paths.images.sprites))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('compile', [
  'build:css',
  'build:js',
  'build:html',
  'build:svgSymbols'
]);

gulp.task('default', ['start', 'compile'], function(){
  gulp.watch(config.paths.styles.src, ['build:css']);
  gulp.watch(config.paths.scripts.src, ['build:js']);
  gulp.watch(config.paths.html.watch, ['build:html']);
  gulp.watch(config.paths.images.sprites, ['build:svgSymbols']);
});
