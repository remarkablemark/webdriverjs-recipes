const { Key, until } = require('selenium-webdriver');
const driver = require('../build');

const TIMEOUT = 1000; // milliseconds

class WaitUntil {
  /**
   * wait util.elementLocated
   *
   * {@link https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait}
   */
  static async waitUntilElementLocated() {
    const element = await driver.wait(
      until.elementLocated({ css: 'input' }),
      TIMEOUT,
    );
    await element.sendKeys('until');

    await driver.wait(
      until.elementLocated({
        xpath: '//div[@class="ac-renderer" and @aria-expanded="true"]',
      }),
      TIMEOUT,
    );
    await element.sendKeys(Key.ENTER);

    const url = await driver.getCurrentUrl();
    console.log('waitUntilElementLocated:', url);
  }

  /**
   * wait custom
   *
   * {@link https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html}
   */
  static async waitCustom() {
    await driver.wait(async () => {
      const url = await driver.getCurrentUrl();
      return /until/.test(url);
    }, TIMEOUT);

    const url = await driver.getCurrentUrl();
    console.log('waitCustom:', url);
  }

  static async run() {
    try {
      await driver.get(
        'https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait',
      );
      await this.waitUntilElementLocated();
      await this.waitCustom();
    } catch (error) {
      console.error(error);
    } finally {
      await driver.quit();
    }
  }
}

WaitUntil.run();
