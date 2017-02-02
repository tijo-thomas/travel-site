var gulp = require('gulp'),
webpack = require('webpack');

// Calls webpack logs errors, if any, and stats.
gulp.task('scripts', function(callback) {
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});