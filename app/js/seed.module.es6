import angular from 'angular'
import ngUIRouter from 'angular-ui-router'
import ngMaterial from 'angular-material'

import menu from './menu'
import home from './home'

export default angular.module('seed', [
  'templates',
  ngUIRouter,
  'ngMaterial',
  menu.name,
  home.name
])
  .config(config)

config.$inject = ['$stateProvider', '$urlRouterProvider']
function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('root', {
      url: '',
      templateUrl: '/menu/menu.html',
      abstract: true
    })
    .state('root.home', {
      url: '/',
      views: {
        content: {
          templateUrl: '/home/home.html',
          controller: 'HomeController',
          controlelrAs: 'homeCtrl'
        }
      }
    });
}