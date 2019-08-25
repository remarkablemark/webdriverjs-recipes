process.env.SELENIUM_BROWSER = 'chrome';

const { Key, until } = require('selenium-webdriver');
const driver = require('./build-driver');

const url =
  'https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait';
driver.get(url);

/**
 * `wait` and `util.elementLocated`
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#wait}
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html}
 */
element = driver.wait(
  until.elementLocated({ css: 'input' }),
  1000, // delay in milliseconds
);

/**
 * `sendKeys`
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html#sendKeys}
 */
element.sendKeys('until');

driver.wait(
  until.elementLocated({
    xpath: '//div[@class="ac-renderer" and @aria-expanded="true"]',
  }),
  1000,
);

element.sendKeys(Key.ENTER);

driver.getCurrentUrl().then(url => {
  console.log('getCurrentUrl:', url);
});

/**
 * `getCurrentUrl`
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#getCurrentUrl}
 */
driver.wait(() => driver.getCurrentUrl().then(url => /until/.test(url)), 1000);

driver.getCurrentUrl().then(url => {
  console.log('getCurrentUrl:', url);
});

driver.quit();
