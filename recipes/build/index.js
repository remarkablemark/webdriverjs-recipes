const { Builder } = require('selenium-webdriver');

const builder = new Builder().forBrowser('firefox');

if (process.env.CI === 'true') {
  const { Options } = require('selenium-webdriver/firefox');
  builder.setFirefoxOptions(new Options().addArguments('--headless'));
}

const driver = builder.build();

module.exports = driver;
