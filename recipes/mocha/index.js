const assert = require('assert');

describe('WebDriverJS', function() {
  this.timeout(5000); // in milliseconds
  let driver;

  // setup
  before(async () => {
    driver = require('../build');
  });

  // teardown
  after(async () => {
    await driver.quit();
  });

  it('opens Google', async () => {
    await driver.get('https://www.google.com');
    assert.equal(await driver.getTitle(), 'Google');
  });
});
