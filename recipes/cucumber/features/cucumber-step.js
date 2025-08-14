const assert = require('assert');
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Key } = require('selenium-webdriver');
const { setDefaultTimeout } = require('@cucumber/cucumber');

const driver = require('../../build');
const page = require('./cucumber-page');

const TEN_MINUTES = 10000;
const FIVE_MINUTES = TEN_MINUTES / 2;
const ONE_MINUTE = TEN_MINUTES / 10;

setDefaultTimeout(FIVE_MINUTES);

Given('I am on the Cucumber page', { timeout: TEN_MINUTES }, async () => {
  await driver.get(page.url);
});

When('I click on link {string}', async (text) => {
  const link = await driver.findElement(page.link(text));
  await link.click();
});

Then('I see the page title {string}', async (expectedTitle) => {
  const actualTitle = await driver.getTitle();
  assert.strictEqual(actualTitle, expectedTitle);
});

AfterAll(async () => {
  await driver.quit();
});
