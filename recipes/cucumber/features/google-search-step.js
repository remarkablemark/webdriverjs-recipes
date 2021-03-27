const assert = require('assert');
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Key } = require('selenium-webdriver');
const { setDefaultTimeout } = require('@cucumber/cucumber');

const driver = require('../../build');
const page = require('./google-search-page');

const TEN_MINUTES = 10000;
const FIVE_MINUTES = TEN_MINUTES / 2;
const ONE_MINUTE = TEN_MINUTES / 10;

setDefaultTimeout(FIVE_MINUTES);

Given('I am on the Google search page', { timeout: TEN_MINUTES }, async () => {
  await driver.get(page.url);
});

When('I search for {string}', async (searchTerm) => {
  const element = await driver.findElement(page.input);
  await element.sendKeys(searchTerm, Key.RETURN);
  await driver.sleep(ONE_MINUTE);
});

Then('I see the page title {string}', async (expectedTitle) => {
  const actualTitle = await driver.getTitle();
  assert.strictEqual(actualTitle, expectedTitle);
});

AfterAll(async () => {
  await driver.quit();
});
