'use strict';

/**
 * @ngdoc service
 * @name cfWatchApp.AbstractSearcher
 * @description
 * # AbstractSearcher
 * Service in the cfWatchApp.
 */
angular.module('cfWatchApp')
  .service('AbstractSearcher', function () {

    function AbstractSearcher(resource, searchUrl) {
      this.resource = resource;
      this.searchUrl = searchUrl;
    }

    AbstractSearcher.prototype.search = function (type, query, callback, page) {
      if (page === undefined || page === null) {
        page = 1;
      }
      page = parseInt(page);
      this.resource.get(
        {'type': type, 'q': query, 'page': page},
        callback
      );
    };
    AbstractSearcher.prototype.nbPages = function (totalElem, perPage) {
      return Math.ceil(totalElem / perPage);

    };
    AbstractSearcher.prototype.createQueryFromNodes = function (baseQuery, nodes, nodeName, where) {
      var datas = [];
      angular.forEach(nodes, function (node) {
        extractDataFromNodes(node, datas, nodeName);
      });
      var query = baseQuery;

      angular.forEach(datas, function (value) {
        query += where + value;
      });
      return query;
    };
    function extractDataFromNodes(nodes, datas, nodeName) {
      if (nodes.items !== undefined && nodes.items.length > 0) {
        angular.forEach(nodes.items, function (node) {
          extractDataFromNodes(node, datas, nodeName);
        });
        return;
      }
      if (nodes[nodeName] !== undefined && nodes.checked) {
        angular.forEach(nodes[nodeName], function (value) {
          datas.push(value);
        });
      }
    }

    AbstractSearcher.prototype.getSearchUrl = function () {
      return this.searchUrl;
    };
    return AbstractSearcher;
  });
