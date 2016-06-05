var gulp         = require('gulp'),
    browserSync  = require('browser-sync').create(),
    sass         = require('gulp-sass'),
    useref       = require('gulp-useref'),
    uglify       = require('gulp-uglify'),
    gulpIf       = require('gulp-if'),
    cssnano      = require('gulp-cssnano'),
    imagemin     = require('gulp-imagemin'),
    cache        = require('gulp-cache'),
    del          = require('del'),
    runSequence  = require('run-sequence'),
    postcss      = require('gulp-postcss'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');
    

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
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



// gulp.task('autoprefixer', function () {
//     return gulp.src('app/scss/**/*.scss')
//       .pipe(sourcemaps.init())
//       .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
//       .pipe(sourcemaps.write('.'))
//       .pipe(gulp.dest('app/css'))
// });

gulp.task('default', function(){
  runSequence(['sass', 'browserSync', 'watch']);
});
