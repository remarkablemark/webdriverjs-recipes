const { Builder } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

const chromeOptions = new Options()
  // replace `my_profile_path`
  .addArguments('--user-data-dir=my_profile_path');

const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .build();

driver.get('chrome://version');

module.exports = driver;
