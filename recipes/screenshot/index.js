const { writeFile } = require('fs').promises;
const driver = require('../build');

(async () => {
  try {
    await driver.get(
      'http://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#takeScreenshot',
    );

    /**
     * {@link https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#takeScreenshot}
     */
    let data = await driver.takeScreenshot();
    data = data.replace('data:image/png;base64', '');

    const filename = 'screenshot.png';
    await writeFile(filename, data, 'base64');
    console.log('Screenshot saved to:', filename);
  } catch (error) {
    console.error(error);
  } finally {
    await driver.quit();
  }
})();
