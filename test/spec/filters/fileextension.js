'use strict';

describe('Filter: fileExtension', function () {

  // load the filter's module
  beforeEach(module('cfWatchApp'));

  // initialize a new instance of the filter before each test
  var fileExtension;
  beforeEach(inject(function ($filter) {
    fileExtension = $filter('fileExtension');
  }));

  it('should return the input prefixed with "fileExtension filter:"', function () {
    var text = 'angularjs';
    expect(fileExtension(text)).toBe('fileExtension filter: ' + text);
  });

});
