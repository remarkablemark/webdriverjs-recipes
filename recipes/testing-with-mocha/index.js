// WebDriverJS testing methods must be used instead of mocha methods due to async
const { after, before, describe, it } = require('selenium-webdriver/testing');
const assert = require('assert');

describe('WebDriverJS', function() {
  this.timeout(5000); // in milliseconds
  let driver;

  // setup
  before(() => {
    driver = require('../build');
  });

  // teardown
  after(() => {
    driver.quit();
  });

  it('opens Google', done => {
    driver.get('https://www.google.com');
    driver.getTitle().then(title => {
      assert.equal(title, 'Google');
      done();
    });
  });
});
