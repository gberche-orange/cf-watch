'use strict';

/**
 * @ngdoc function
 * @name cfWatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cfWatchApp
 */
angular.module('cfWatchApp')
  .controller('MainCtrl', function ($scope, $http, GithubSearch) {
    $http.get('data/filter.json')
      .then(function (res) {
        $scope.list = res.data;
      });


    $scope.checkSubTree = function (node, checked) {
      if (checked === undefined || checked === false) {
        checked = true;
      } else {
        checked = false;
      }
      angular.forEach(node.items, function (node) {
        node.checked = checked;
      });
      if (checked) {
        $scope.finalQuery = GithubSearch.createQueryFromNodes($scope.query, $scope.list);
      }
    };

    $scope.searchLink = function () {
      return GithubSearch.getGithubNormalSearchUrl() + GithubSearch.createQueryFromNodes($scope.query, $scope.list);
    };
    $scope.search = function () {
      var query = GithubSearch.createQueryFromNodes($scope.query, $scope.list);
      GithubSearch.search('repositories', query, function (res) {
        $scope.githubResults = res.data.items;
        console.log(res);
      });
    };
  });
