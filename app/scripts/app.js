'use strict';

/**
 * @ngdoc overview
 * @name cfWatchApp
 * @description
 * # cfWatchApp
 *
 * Main module of the application.
 */
angular
  .module('cfWatchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.tree',
    'ui.bootstrap',
    'hljs'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
