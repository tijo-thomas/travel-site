var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

// Gets all of the CSS and JS files in the project
gulp.task('modernizr', function() {
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts'));
});