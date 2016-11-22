'use strict';

/**
 * Module dependencies.
 */
var webdriver = require('selenium-webdriver');
var until = webdriver.until;
process.env.SELENIUM_BROWSER = 'chrome';
var driver = require('./build-driver');

driver.get('http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait');

driver.findElement({ css: 'input' }).sendKeys('until');

/**
 * Wait until element is located.
 */
var element = driver.wait(
    until.elementLocated({ css: '.ac-row' }),
    1000 // delay in milliseconds
);

element.click();

driver.getCurrentUrl().then(function(url) {
    console.log(url);
});

/**
 * Wait until custom condition.
 */
driver.wait(function() {
    return driver.getCurrentUrl().then(function(url) {
        return /until/.test(url);
    });
}, 1000);

driver.getCurrentUrl().then(function(url) {
    console.log(url);
});

driver.quit();
