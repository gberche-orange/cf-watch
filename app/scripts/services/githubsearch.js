'use strict';

/**
 * @ngdoc service
 * @name cfWatchApp.GithubSearch
 * @description
 * # GithubSearch
 * Factory in the cfWatchApp.
 */
angular.module('cfWatchApp')
  .factory('GithubSearch', function ($resource, AbstractSearcher) {
    var githubNormalSearchUrl = 'https://github.com/search?type=Repositories&ref=advsearch&q=';
    var perPage = 10;
    var resource = $resource(
      'https://api.github.com/search/:type?q=:q',
      {
        'type': 'repositories',
        'q': '',
        'per_page': perPage
      }, {
        'get': {
          'method': 'GET',
          'headers': {'Accept': 'application/vnd.github.v3.text-match+json'}
        }
      }
    );

    function GithubSearch() {
      this.abstractSearcher = new AbstractSearcher(resource, githubNormalSearchUrl);
    }

    GithubSearch.prototype.search = function (type, query, callback, page) {
      this.abstractSearcher.search(type, query, callback, page);
    };
    GithubSearch.prototype.nbPages = function (res) {
      return this.abstractSearcher.nbPages(res.total_count, perPage);
    };
    GithubSearch.prototype.createQueryFromNodes = function (baseQuery, nodes) {
      return this.abstractSearcher.createQueryFromNodes(baseQuery, nodes, 'github', ' user:');
    };
    GithubSearch.prototype.getGithubNormalSearchUrl = function () {
      return this.abstractSearcher.getSearchUrl();
    };
    return new GithubSearch();
  });
