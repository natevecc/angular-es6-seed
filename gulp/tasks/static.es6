import gulp from 'gulp'
import {staticConfig} from '../config'

gulp.task('static', () => {
  gulp.src(staticConfig.src)
  .pipe(gulp.dest(staticConfig.dest))
})

gulp.task('static:watch', ['static'], () => {
  gulp.watch(staticConfig.src, ['static'])
})