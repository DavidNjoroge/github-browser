var gulp = require('gulp')
var lib = require('bower-files')();
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')

gulp.task('bowerJS', function() {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});
