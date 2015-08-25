import angular from 'angular'
import template from './menu.html'
import ngMaterial from 'angular-material'

import MenuController from './menu.controller'

export default angular.module('seed.menu', ['templates', ngMaterial])
  .controller('MenuController', MenuController)