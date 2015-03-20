'use strict';

/**
 * @ngdoc function
 * @name cfWatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cfWatchApp
 */
angular.module('cfWatchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.redirect = function () {
      window.location.href = "https://github.com/search?utf8=%E2%9C%93&q=" + $scope.query + "+user%3Acloudfoundry+user%3Acloudfoundry-incubator+user%3Acloudfoundry-community+user%3Acloudfoundry-samples+user%3Apivotal-cf+user%3Acf-platform-eng+user%3APivotal-Field-Engineering+user%3Apivotalservices+user%3Apivotal-cf-workshop+user%3Apivotal-cf-experimental+user%3Acf-services+user%3Apcf-guides+user%3Apivotalsoftware+user%3Apivotal-cf-workshop+user%3APivotal-CF-Support+user%3Acfmobile+user%3Apivotal-lattice+user%3APivotal-Solutions+user%3Astarkandwayne+user%3AAltoros+user%3AActiveState+user%3ACloudCredo+user%3AIBM-Bluemix+user%3Aippontech+user%3Alogsearch+user%3Aspring+user%3Aspring-projects+user%3Aspring-guides+user%3Aspgreenberg+user%3Amstine+user%3Ajoshlong+user%3Amheath+user%3Ayoungm&type=Repositories&ref=advsearch&l=";
    };
  });