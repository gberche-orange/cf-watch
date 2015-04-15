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
    var steps = 4;
    var actualStep = 0;
    $scope.progressBar = null;
    $scope.googleResults = null;
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

    $scope.searchGithubByTypeAndPage = function (type, page, next) {
      page = page || 1;
      GithubSearch.search(type, $scope.queryGithub, function (res) {
        if ($scope.progressBar !== null) {
          $scope.progressBar.text = 'Searching on github ' + type + ' ...';
        }

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
        } else {
          var search = {};
          search.name = type;
          search.page = 1;
          search.githubResults = res;
          search.githubCurrentPage = page;
          search.githubResultsNb = GithubSearch.nbPages(res);
          $scope.githubSearching.push(search);
        }
        if ($scope.progressBar !== null) {
          $scope.progressBar.value = Math.ceil(actualStep * 100 / steps);
        }

        actualStep++;
        if (next !== undefined && next !== null) {
          next();
        } else {
          $scope.progressBar = null;
        }


      }, page);
    };
    $scope.searchRepoByPage = function (page, next) {
      $scope.searchGithubByTypeAndPage('repositories', page, next);
    };
    $scope.searchIssuesByPage = function (page, next) {
      $scope.searchGithubByTypeAndPage('issues', page, next);
    };
    $scope.searchCodeByPage = function (page, next) {
      $scope.searchGithubByTypeAndPage('code', page, next);
    };
    $scope.searchUsersByPage = function (page, next) {
      $scope.searchGithubByTypeAndPage('users', page, next);
    };
    $scope.search = function () {
      $scope.progressBar = {
        value: 0,
        type: 'info',
        text: 'Searching on github repositories ...'
      };
      actualStep = 1;
      $scope.githubSearching = [];
      $scope.queryGithub = GithubSearch.createQueryFromNodes($scope.query, $scope.list);
      var funcCode = function () {
        $scope.searchCodeByPage(1);
        $scope.githubResults = 1;
      };
      var funcUsers = function () {
        $scope.searchUsersByPage(1, funcCode);
      };
      var funcIssues = function () {
        $scope.searchIssuesByPage(1, funcUsers);
      };
      $scope.searchRepoByPage(1, funcIssues);


    };
  })
;
