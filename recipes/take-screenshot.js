'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs');
var driver = require('./build-driver');

driver.get('http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#takeScreenshot');

/**
 * Take screenshot.
 */
driver.takeScreenshot().then(function(data) {
    data = data.replace('data:image/png;base64', '');
    var filename = 'screenshot.png';

    // https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
    fs.writeFile(filename, data, 'base64', function(error) {
        if (error) throw error;
        console.log('Screenshot saved to:', filename);
    });
});

driver.quit();
