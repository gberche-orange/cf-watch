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

    $scope.searchRepoByPage = function (page) {
      page = page || 1;
      GithubSearch.search('repositories', $scope.queryGithub, function (res) {
        $scope.githubResults = 1;
        $scope.pageRepo = 1;
        $scope.githubResultsRepo = res.data;
        $scope.githubCurrentPageRepo = page;
        $scope.githubResultsNbRepo = GithubSearch.nbPages(res);
      }, page);
    };
    $scope.searchIssuesByPage = function (page) {
      page = page || 1;
      GithubSearch.search('issues', $scope.queryGithub, function (res) {
        $scope.pageIssues = 1;
        $scope.githubResultsIssues = res.data;
        $scope.githubCurrentPageIssues = page;
        $scope.githubResultsNbIssues = GithubSearch.nbPages(res);
        console.log(res);
      }, page);
    };
    $scope.search = function () {
      $scope.queryGithub = GithubSearch.createQueryFromNodes($scope.query, $scope.list);
      $scope.searchRepoByPage(1);
      $scope.searchIssuesByPage(1);

    };
  });
