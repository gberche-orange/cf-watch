'use strict';

describe('Service: AbstractSearcher', function () {

  // load the service's module
  beforeEach(module('cfWatchApp'));

  // instantiate service
  var AbstractSearcher;
  beforeEach(inject(function (_AbstractSearcher_) {
    AbstractSearcher = _AbstractSearcher_;
  }));

  it('should do something', function () {
    expect(!!AbstractSearcher).toBe(true);
  });

});
