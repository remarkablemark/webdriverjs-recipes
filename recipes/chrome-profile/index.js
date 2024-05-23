const { Builder } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

const options = new Options()
  // replace `my_profile_path`
  .addArguments('--user-data-dir=my_profile_path');

if (process.env.CI === 'true') {
  options.addArguments('--headless=new');
}

const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

driver.get('chrome://version');

module.exports = driver;
