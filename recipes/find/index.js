const { By } = require('selenium-webdriver');
const driver = require('../build');

class Find {
  /**
   * findElement By.tagName
   *
   * {@link https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElement}
   * {@link https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html}
   */
  static async findElementByTagName() {
    const element = await driver.findElement(By.tagName('h1'));
    console.log('findElementByTagName:', await element.getTagName());
  }

  /**
   * findElement By.Hash
   */
  static async findElementByHash() {
    const element = driver.findElement({ tagName: 'h1' });
    const html = await element.getAttribute('outerHTML');
    console.log('findElementByHash:', html);
  }

  /**
   * findElements By.Hash
   *
   * {@link https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElements}
   */
  static async findElementsByHash() {
    const elements = await driver.findElements({ css: 'h2' });
    // returns `WebElements[]`
    console.log(
      'findElementsByHash:',
      elements.map(element => element.constructor),
    );
  }

  /**
   * findElement NoSuchElementError
   */
  static async findElementNoSuchElementError() {
    try {
      await driver.findElement({ className: 'nonexistent-class' });
    } catch (error) {
      if (error.name === 'NoSuchElementError') {
        console.log('findElementNoSuchElementError:', error.message);
      }
    }
  }

  /**
   * findElements.length === 0
   */
  static async findElementsNone() {
    const elements = await driver.findElements({
      className: 'nonexistent-class',
    });
    if (!elements.length) {
      console.log('findElementsNone:', elements.length);
    }
  }

  static async run() {
    try {
      await driver.get(
        'https://www.selenium.dev/selenium/docs/api/javascript/index.html',
      );
      await this.findElementByTagName();
      await this.findElementByHash();
      await this.findElementsByHash();
      await this.findElementNoSuchElementError();
      await this.findElementsNone();
    } catch (error) {
      console.error(error);
    } finally {
      await driver.quit();
    }
  }
}

Find.run();
