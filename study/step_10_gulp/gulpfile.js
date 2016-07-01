var gulp = require('gulp');
var sass = require('gulp-sass');

 gulp.task('hello' , function(){
 	console.log('-------------------------------------------------');
 	console.log('\> gulp시작');
 	console.log('-------------------------------------------------');
 });

// sass 설치

gulp.task('sass', function () {
  return gulp.src('./src/scss/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/*', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);