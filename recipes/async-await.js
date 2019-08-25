const { Builder, Key, promise, until } = require('selenium-webdriver');

/**
 * Disable the promise manager
 * Alternatively, it can be disabled by setting the environment variable:
 * SELENIUM_PROMISE_MANAGER=0
 *
 * {@link https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs#step-1-disabling-the-promise-manager}
 */
promise.USE_PROMISE_MANAGER = false;

async function run() {
  let driver;

  try {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com/');
    console.log('getTitle:', await driver.getTitle());

    const element = await driver.findElement({ name: 'q' });
    await element.sendKeys('webdriver', Key.ENTER);

    await driver.wait(until.titleContains('webdriver'), 1000);
    console.log('getTitle:', await driver.getTitle());
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

run();
