'use strict';

/**
 * @ngdoc service
 * @name cfWatchApp.GithubSearch
 * @description
 * # GithubSearch
 * Factory in the cfWatchApp.
 */
angular.module('cfWatchApp')
  .factory('GithubSearch', function ($resource) {
    var githubNormalSearchUrl = 'https://github.com/search?type=Repositories&ref=advsearch&q=';
    var resource = $resource(
      'https://api.github.com/search/:type?q=:q',
      {
        'type': 'repositories',
        'q': '',
        'callback': 'JSON_CALLBACK',
        'per_page': 50
      }, {
        'get': {
          'method': 'JSONP'
        }
      }
    );

    function GithubSearch() {

    }

    GithubSearch.search = function (type, query, callback) {
      resource.get(
        {'type': type, 'q': query},
        callback
      );
    };
    GithubSearch.createQueryFromNodes = function (baseQuery, nodes) {
      var datas = [];
      angular.forEach(nodes, function (node) {
        extractDataFromNodes(node, datas);
      });
      var query = baseQuery;

      angular.forEach(datas, function (value) {
        query += ' user:' + value;
      });
      return query;
    };
    function extractDataFromNodes(nodes, datas) {
      if (nodes.items !== undefined && nodes.items.length > 0) {
        angular.forEach(nodes.items, function (node) {
          extractDataFromNodes(node, datas);
        });
        return;
      }
      if (nodes.github !== undefined && nodes.checked) {
        angular.forEach(nodes.github, function (value) {
          datas.push(value);
        });
      }
    }

    GithubSearch.getGithubNormalSearchUrl = function () {
      return githubNormalSearchUrl;
    };
    return GithubSearch;
  });
