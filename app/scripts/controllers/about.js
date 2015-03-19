'use strict';

/**
 * @ngdoc function
 * @name cfWatchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cfWatchApp
 */
angular.module('cfWatchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
