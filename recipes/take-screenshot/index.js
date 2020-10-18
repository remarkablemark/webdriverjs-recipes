const { writeFile } = require('fs');
const driver = require('../build-driver');

const url =
  'http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#takeScreenshot';
driver.get(url);

/**
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#takeScreenshot}
 */
driver.takeScreenshot().then(data => {
  data = data.replace('data:image/png;base64', '');
  const filename = 'screenshot.png';

  /**
   * {@link https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback}
   */
  writeFile(filename, data, 'base64', error => {
    if (error) throw error;
    console.log('Screenshot saved to:', filename);
  });
});

driver.quit();
