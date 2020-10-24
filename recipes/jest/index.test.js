const assert = require('assert');
const driver = require('../build');

afterAll(async () => {
  await driver.quit();
});

it('opens Google', async () => {
  await driver.get('https://www.google.com');
  assert.strictEqual(await driver.getTitle(), 'Google');
});
