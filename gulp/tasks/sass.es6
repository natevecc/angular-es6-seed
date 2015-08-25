import gulp from 'gulp'
import {sassConfig, concatCssConfig} from '../config'
import sass from 'gulp-sass'
import concatCss from 'gulp-concat-css'
import sourcemaps from 'gulp-sourcemaps'

gulp.task('sass', () => {
  gulp
    .src(sassConfig.src)
    .pipe(sourcemaps.init())
    .pipe(sass(sassConfig.options)
    .on('error', sass.logError))
    .pipe(concatCss(concatCssConfig.dest, concatCssConfig.options))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassConfig.dest));
})

gulp.task('sass:watch', ['sass'], function() {
  gulp.watch(sassConfig.src, ['sass']);
});