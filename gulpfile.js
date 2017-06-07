var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('watch', function() {
  return watch('src/**/*', function () {
    gulp.start('copysrc');
    gulp.start('webpack');
    gulp.start('compilesass');
  });
});

gulp.task('default', function() {
  gulp.start('copysrc');
  gulp.start('compilesass');
  gulp.start('webpack');
});

gulp.task('copysrc', function() {
  gulp.src(['src/index.html'])
        .pipe(gulp.dest('dist/'));
  gulp.src(['src/images/**/*'])
        .pipe(gulp.dest('dist/static/images/'));
});

gulp.task("compilesass", function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/static/css'));
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        entry: './src/app.js',
        output: {
          filename: 'dist/bundle.js'
        }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});