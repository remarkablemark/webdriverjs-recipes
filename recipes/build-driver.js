const { Builder } = require('selenium-webdriver');

const driver = new Builder().forBrowser('firefox').build();

module.exports = driver;
