import angular from 'angular'
import template from './home.html'
import HomeController from './home.controller'

export default angular.module('seed.home', ['templates'])
  .controller('HomeController', HomeController)
