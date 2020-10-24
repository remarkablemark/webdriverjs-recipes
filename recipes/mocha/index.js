const assert = require('assert');

const FIVE_SECONDS = 5000;

describe('mocha', function() {
  this.timeout(FIVE_SECONDS);
  let driver;

  before(async () => {
    driver = require('../build');
  });

  after(async () => {
    await driver.quit();
  });

  it('opens Google', async () => {
    await driver.get('https://www.google.com');
    assert.strictEqual(await driver.getTitle(), 'Google');
  });
});
