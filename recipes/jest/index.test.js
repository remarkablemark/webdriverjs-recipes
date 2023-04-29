const driver = require('../build');

afterAll(async () => {
  await driver.quit();
});

it('opens Google', async () => {
  await driver.get('https://www.google.com');
  expect(await driver.getTitle()).toBe('Google');
});
