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
    $scope.githubSearching = [];
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
        console.log(res);
        var index = -1;
        angular.forEach($scope.githubSearching, function (result, key) {
          if (result.name === type) {
            index = key;
          }
        });
        if (index !== -1) {
          $scope.githubSearching[index].page = 1;
          $scope.githubSearching[index].githubResults = res;
          $scope.githubSearching[index].githubCurrentPage = page;
          $scope.githubSearching[index].githubResultsNb = GithubSearch.nbPages(res);
          return;
        }
        var search = {};

        $scope.githubResults = 1;
        search.name = type;
        search.page = 1;
        search.githubResults = res;
        search.githubCurrentPage = page;
        search.githubResultsNb = GithubSearch.nbPages(res);
        $scope.githubSearching.push(search);


      }, page);
    };
    $scope.searchRepoByPage = function (page) {
      $scope.searchGithubByTypeAndPage('repositories', page);
    };
    $scope.searchIssuesByPage = function (page) {
      $scope.searchGithubByTypeAndPage('issues', page);
    };
    $scope.searchCodeByPage = function (page) {
      $scope.searchGithubByTypeAndPage('code', page);
    };
    $scope.searchUsersByPage = function (page) {
      $scope.searchGithubByTypeAndPage('users', page);
    };
    $scope.search = function () {
      $scope.githubSearching = [];
      $scope.queryGithub = GithubSearch.createQueryFromNodes($scope.query, $scope.list);
      $scope.searchRepoByPage(1);
      $scope.searchIssuesByPage(1);
      $scope.searchUsersByPage(1);
      $scope.searchCodeByPage(1);

    };
  });
