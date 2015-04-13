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
      checked = !!(checked === undefined || checked === false);
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
    $scope.getRepoName = function (url) {
      var exRepo = new RegExp('http(s?)://github\.com/([^/]*/[^/]*)/.*');
      var repo = exRepo.exec(url);
      return repo[2];
    };
    $scope.getRepoUrl = function (url) {
      return 'https://github.com/' + $scope.getRepoName(url);
    };
    $scope.searchGithubByTypeAndPage = function (type, page) {
      page = page || 1;
      GithubSearch.search(type, $scope.queryGithub, function (res) {
        var finalType = null;
        if (type === 'repositories') {
          finalType = 'Repo';
        } else {
          finalType = 'Issues';
        }
        $scope.githubResults = 1;
        $scope['page' + finalType] = 1;
        $scope['githubResults' + finalType] = res.data;
        $scope['githubCurrentPage' + finalType] = page;
        $scope['githubResultsNb' + finalType] = GithubSearch.nbPages(res);
      }, page);
    };
    $scope.searchRepoByPage = function (page) {
      $scope.searchGithubByTypeAndPage('repositories', page);
    };
    $scope.searchIssuesByPage = function (page) {
      $scope.searchGithubByTypeAndPage('issues', page);
    };
    $scope.search = function () {
      $scope.queryGithub = GithubSearch.createQueryFromNodes($scope.query, $scope.list);
      $scope.searchRepoByPage(1);
      $scope.searchIssuesByPage(1);

    };
  });
