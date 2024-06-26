const { Builder, Browser, Key, until } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/firefox');

/**
 * {@link https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs#moving-to-asyncawait}
 */
(async () => {
  const driver = await new Builder()
    .forBrowser(Browser.FIREFOX)
    .setFirefoxOptions(new Options().addArguments('--headless'))
    .build();

  try {
    await driver.get('https://www.google.com/');
    console.log('getTitle:', await driver.getTitle());

    const element = await driver.findElement({ name: 'q' });
    await element.sendKeys('webdriver', Key.ENTER);

    await driver.wait(until.titleContains('webdriver'), 1000);
    console.log('getTitle:', await driver.getTitle());
  } catch (error) {
    console.error(error);
  } finally {
    await driver.quit();
  }
})();
