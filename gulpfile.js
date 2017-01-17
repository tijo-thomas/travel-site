var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

// return is used so gulp is aware when the function completes.
// postcss() is actually expecting an array
gulp.task('styles', function() {
  return gulp.src('app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('app/temp/styles'));
});

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