const { By } = require('selenium-webdriver');
const driver = require('../build');

const url =
  'https://seleniumhq.github.io/selenium/docs/api/javascript/index.html';
driver.get(url);

/**
 * `findElement` with `By.tagName`
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElement}
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html}
 */
driver.findElement(By.tagName('h1')).then(element =>
  element.getTagName().then(tagName => {
    console.log('findElement By.tagName:', tagName);
  }),
);

/**
 * `findElement` by hash object
 */
driver
  .findElement({ tagName: 'h1' })
  .getAttribute('outerHTML')
  .then(html => {
    console.log('findElement By.Hash:', html);
  });

/**
 * `findElements` by hash object
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElements}
 */
driver.findElements({ css: 'h2' }).then(elements => {
  // returns `WebElements[]`
  console.log(
    'findElements By.Hash:',
    elements.map(element => element.constructor),
  );
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
 * `findElements` length is 0
 */
driver.findElements({ className: 'nonexistent-class' }).then(elements => {
  if (!elements.length) {
    console.log('findElements:', elements);
  }
});

driver.quit();
