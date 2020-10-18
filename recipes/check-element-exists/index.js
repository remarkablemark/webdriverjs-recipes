const { WebElement } = require('selenium-webdriver');
const driver = require('../build-driver');

const url =
  'https://seleniumhq.github.io/selenium/docs/api/javascript/index.html';
driver.get(url);

/**
 * `findElement`
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElement}
 */
driver.findElement({ css: 'body' }).then(element => {
  if (element instanceof WebElement) {
    console.log('findElement:', element.constructor.name);
  }
});

/**
 * `findElement` throws `NoSuchElementError`
 */
driver.findElement({ className: 'nonexistent-class' }).catch(error => {
  if (error.name === 'NoSuchElementError') {
    console.log('findElement:', error.message);
  }
});

driver.findElement({ className: 'nonexistent-class' }).then(null, error => {
  if (error.name === 'NoSuchElementError') {
    console.log('findElement:', error.message);
  }
});

/**
 * `findElements`
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElements}
 */
driver.findElements({ css: 'body' }).then(elements => {
  if (elements.length) {
    console.log('findElements:', elements.length);
  }
});

/**
 * `findElements` length is 0
 */
driver.findElements({ className: 'nonexistent-class' }).then(elements => {
  if (!elements.length) {
    console.log('findElements:', elements.length);
  }
});

driver.quit();
