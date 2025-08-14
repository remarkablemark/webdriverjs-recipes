const { By, Key } = require('selenium-webdriver');

module.exports = {
  url: 'https://cucumber.io/',
  button: By.xpath('//button[@aria-label="Search (Command+K)"]'),
  input: By.id('docsearch-input'),
};
