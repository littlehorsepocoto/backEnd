/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp = require('gulp');


gulp.task('watch', function() {
  gulp.watch('./src/**/*.coffee', ['coffee']);
});
