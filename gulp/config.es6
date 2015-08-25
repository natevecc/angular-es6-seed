const sourceFiles = './app'
const dest = './dist'

export const browserifyConfig = {
  entries: `${sourceFiles}/js/seed.module.es6`,
  dest,
  outputName: 'bundle.js',
  extensions: ['.js', '.es6', '.html']
}

export const ngHtml2JsConfig = {
  module: 'templates',
  baseDir: `${sourceFiles}/js`
}

export const babelifyConfig = {
  ignore: /.*\.html/
}

export const staticConfig = {
  src: ['./app/index.html'],
  dest: dest
}

export const webserverConfig = {
  src: dest,
  options: {
    livereload: true,
    open: true
  }
}

export const sassConfig = {
  src: 'app/scss/**/*.scss',
  options: {
    includePaths: ["node_modules"]
  },
  dest: dest
}

export const concatCssConfig = {
  dest: './bundle.css',
  options: {
    includePaths: ["node_modules"]
  }
}