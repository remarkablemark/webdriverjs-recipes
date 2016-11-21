'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs');
var driver = require('./build-driver');

driver.get('http://example.com');

/**
 * Take screenshot.
 *
 * http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#takeScreenshot
 */
driver.takeScreenshot().then(function(data) {
    var FILENAME = 'screenshot.png';
    data = data.replace('data:image/png;base64', '');

    // https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
    fs.writeFile(FILENAME, data, 'base64', function(error) {
        if (error) {
            throw error;
        } else {
            console.log('Screenshot saved to:', FILENAME);
        }
    });
});

driver.quit();
