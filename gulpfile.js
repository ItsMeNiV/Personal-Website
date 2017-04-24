var gulp = require('gulp');

gulp.task('build', function() {
  gulp.src(['index.html', 'scripts/**/*', 'server.js'])
        .pipe(gulp.dest('dist/'))
  gulp.src(['images/**/*'])
        .pipe(gulp.dest('dist/images/'))
  gulp.src(['css/**/*'])
        .pipe(gulp.dest('dist/css/'))
});