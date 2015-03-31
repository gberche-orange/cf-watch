'use strict';

describe('Service: GithubSearch', function () {

  // load the service's module
  beforeEach(module('cfWatchApp'));

  // instantiate service
  var GithubSearch;
  beforeEach(inject(function (_GithubSearch_) {
    GithubSearch = _GithubSearch_;
  }));

  it('should do something', function () {
    expect(!!GithubSearch).toBe(true);
  });

});
