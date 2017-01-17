var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
})

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
})

gulp.task('styles', function() {
  console.log("Imagine Sass or PostCss tasks running here.");
})

gulp.task('watch', function() {

  // watch for saved changes to, 1st arg is location, 2nd arg is what we want to do.
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  // triggers the styles task on save.
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});