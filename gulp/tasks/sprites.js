var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

// Deletes specified folders.
gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

// Creates sprite.svg file.
gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

// Moves sprite.svg file into projects main images folder.
gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

// Copies sprite.css file from temp folder, renames, and pastes in modules folder.
gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

// Delete temp/sprite folder.
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);