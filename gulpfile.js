var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function(){
  var opt = {entries: './app.jsx', extensions: ['.jsx'], debug: true};

  return browserify(opt)
    .transform(babelify.configure({presets: ['es2015', 'react']}))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function(){
  gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);
