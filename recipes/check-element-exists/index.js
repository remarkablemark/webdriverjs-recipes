const { WebElement } = require('selenium-webdriver');
const driver = require('../build');

class CheckElementExists {
  /**
   * findElement
   *
   * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElement}
   */
  static async findElement() {
    const element = await driver.findElement({ css: 'body' });
    if (element instanceof WebElement) {
      console.log('findElement:', element.constructor.name);
    }
  }

  /**
   * NoSuchElementError
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
   * findElements
   *
   * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElements}
   */
  static async findElements() {
    const elements = await driver.findElements({ css: 'body' });
    if (elements.length) {
      console.log('findElements:', elements.length);
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
        'https://seleniumhq.github.io/selenium/docs/api/javascript/index.html',
      );
      await this.findElement();
      await this.findElementNoSuchElementError();
      await this.findElements();
      await this.findElementsNone();
    } catch (error) {
      console.log(error);
    } finally {
      await driver.quit();
    }
  }
}

CheckElementExists.run();
