import requireDir from 'require-dir'
import gulp from 'gulp'

requireDir('./tasks', { recurse: true })

gulp.task('watch', ['serve', 'static:watch', 'sass:watch', 'browserify'])

gulp.task('default', ['watch'])