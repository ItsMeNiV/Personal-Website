var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

gulp.task('default', function() {
  gulp.src(['site/index.html'])
        .pipe(gulp.dest('../'))
  gulp.src(['site/css/**/*'])
        .pipe(gulp.dest('../static/css/'))
  gulp.src(['site/images/**/*'])
        .pipe(gulp.dest('../static/images/'))
  gulp.start('webpack');
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        entry: './site/app.js',
        output: {
          filename: '../bundle.js'
        }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});