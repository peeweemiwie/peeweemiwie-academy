var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    useref      = require('gulp-useref'),
    uglify      = require('gulp-uglify'),
    gulpIf      = require('gulp-if'),
    cssnano     = require('gulp-cssnano'),
    imagemin    = require('gulp-imagemin'),
    cache       = require('gulp-cache'),
    del         = require('del'),
    runSequence = require('run-sequence');
    

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('watch', ['browserSync'], function(){
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload)
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});



gulp.task('clean:dist', function(){
  return del.sync('dist');
});

gulp.task('default', function(){
  runSequence(['browserSync', 'watch']);
});



