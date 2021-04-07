const { Key, until } = require('selenium-webdriver');
const driver = require('../build');

const TIMEOUT = 1000; // milliseconds

class I {
  /**
   * driver.wait() + until.elementLocated()
   *
   * {@link https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait}
   */
  async waitUntilElementIsLocated() {
    console.log('I wait until input is located');
    const element = await driver.wait(
      until.elementLocated({ css: 'input' }),
      TIMEOUT,
    );
    await element.sendKeys('until');

    console.log('I wait until element is located');
    await driver.wait(
      until.elementLocated({
        xpath: '//div[@class="ac-renderer" and @aria-expanded="true"]',
      }),
      TIMEOUT,
    );
    await element.sendKeys(Key.ENTER);
  }

  /**
   * driver.wait() + custom condition
   *
   * {@link https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html}
   */
  async waitUntilCustomConditionIsTrue() {
    console.log('I wait until custom condition is true');
    await driver.wait(async () => {
      const url = await driver.getCurrentUrl();
      return /until/.test(url);
    }, TIMEOUT);
  }

  async openBrowser() {
    console.log('I open browser');
    const url =
      'https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait';
    await driver.get(url);
  }

  async quitBrowser() {
    console.log('I quit browser');
    await driver.quit();
  }
}

module.exports = new I();
