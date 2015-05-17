var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');


gulp.task('nodemon', function() {
  nodemon({
      script: './dist/index.js',
      ext: 'js',
      ignore: ['ignored.js']

    })
    .on('restart', function() {

      gutil.log('restarted!');
    });
});
