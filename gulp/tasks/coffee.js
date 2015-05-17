var gulp = require('gulp');
var coffee = require('gulp-coffee');
var handleErrors = require('../util/handleErrors');

gulp.task('coffee', function() {
  gulp.src('./src/**/*.coffee')
    .pipe(coffee({
      bare: true
    }).on('error', handleErrors))
    .pipe(gulp.dest('./dist/'))
});
