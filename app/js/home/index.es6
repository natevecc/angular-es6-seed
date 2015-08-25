import angular from 'angular'
import template from './home.html'
import ngMaterial from 'angular-material'

import HomeController from './home.controller'
import Users from './users.service'

export default angular.module('seed.home', ['templates', ngMaterial])
  .controller('HomeController', HomeController)
  .service('Users', Users)
