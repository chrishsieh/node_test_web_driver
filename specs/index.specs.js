var assert = require('assert');

describe('www.google.com page', function() {
  it('should have the right title', function () {
    browser.url('http://www.google.com/');
    var title = browser.getTitle();
    assert.equal(title, 'Google');
  });
});
