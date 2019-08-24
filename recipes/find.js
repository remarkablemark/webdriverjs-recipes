const { By, Key, until } = require('selenium-webdriver');
const driver = require('./build-driver');

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
 * `wait` and `util.elementLocated`
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#wait}
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html}
 */
let element = driver.wait(
  until.elementLocated({ xpath: '//input[@type="search"]' }),
  500, // delay in milliseconds
);

/**
 * `sendKeys`
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html#sendKeys}
 */
element.sendKeys('findElement');

/**
 * `sleep`
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#sleep}
 */
driver.sleep(300);

element.sendKeys(Key.ENTER);
element = driver.wait(
  until.elementLocated({ css: '#findElement > .header > .name' }),
  500, // delay in milliseconds
);

/**
 * `getText`
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html#getText}
 */
element.getText().then(text => {
  console.log('getText:', text);
});
