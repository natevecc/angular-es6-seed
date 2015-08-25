import _ from 'lodash'
import browserify from 'browserify'
import {browserifyConfig, ngHtml2JsConfig, babelifyConfig} from '../config'
import gulp from 'gulp'
import source from 'vinyl-source-stream'
import watchify from 'watchify'
import ngHtml2Js from 'browserify-ng-html2js'
import babelify from 'babelify'
import gutil from 'gulp-util'

const b = watchify(browserify(browserifyConfig))
  .transform(ngHtml2Js(ngHtml2JsConfig))
  .transform(babelify.configure(babelifyConfig))

function bundle() {
  b.bundle()
    .on('error', gutil.log)
    .pipe(source(browserifyConfig.outputName))
    .pipe(gulp.dest(browserifyConfig.dest))
}

gulp.task('browserify', bundle)
b.on('update', bundle)
b.on('log', gutil.log)