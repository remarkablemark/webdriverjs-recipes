const { By, Key } = require('selenium-webdriver');

module.exports = {
  url: 'https://cucumber.io/',
  link: (text) => By.xpath(`//a[text()=${JSON.stringify(text)}]`),
};
