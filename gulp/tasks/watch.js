var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  // watch for saved changes to, 1st arg is location, 2nd arg is what we want to do.
  watch('./app/index.html', function() {
    browserSync.reload();
  });

  // triggers the styles task on save.
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('app/temp/styles/styles.css')
    .pipe(browserSync.stream());
})