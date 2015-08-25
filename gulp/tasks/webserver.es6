import gulp from 'gulp'
import webserver from 'gulp-webserver'
import {webserverConfig} from '../config'

gulp.task('serve', () => {
  gulp.src(webserverConfig.src)
    .pipe(webserver(webserverConfig.options))
})