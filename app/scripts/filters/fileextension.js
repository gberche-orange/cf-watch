'use strict';

/**
 * @ngdoc filter
 * @name cfWatchApp.filter:fileExtension
 * @function
 * @description
 * # fileExtension
 * Filter in the cfWatchApp.
 */
angular.module('cfWatchApp')
  .filter('fileExtension', function () {
    return function (input) {
      return input.substr((Math.max(0, input.lastIndexOf('.')) || Infinity) + 1);
    };
  });
