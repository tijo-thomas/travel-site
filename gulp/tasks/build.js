var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

// Runs browser sync preview of the dist folder.
gulp.task('previewDist', function() {
  browserSync.init({
    server: {
      baseDir: "docs"
    }
  });
});

// Deletes the dist folder.
gulp.task('deleteDistFolder', ["icons"], function() {
  return del("./docs")
});

// Copies general files and folders to dist folder.
gulp.task('copyGeneralFiles', ["deleteDistFolder"], function() {
  var pathsToCopy = [
    "./app/**/*",                 // Includes any/all app folder contents.
    "!./app/index.html",          // Excludes index.html file.
    "!./app/assets/images/**",    // Excludes images folder contents.
    "!./app/assets/styles/**",    // Excludes styles folder contents.
    "!./app/assets/scripts/**",   // Excludes scripts folder contents.
    "!./app/temp",                // Excludes temp folder itself.
    "!./app/temp/**"              // Excludes temp folder contents.
  ];
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
});

// Optimizes images.
gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons", "!./app/assets/images/icons/**/*"])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("useminTrigger", ["deleteDistFolder"], function() {
  gulp.start("usemin");
});


// Runs revisioning and minification of CSS and JS files.
gulp.task('usemin', ["styles", "scripts"], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function () {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./docs"));
});


// This task will be the shortcut that triggers other tasks.
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);