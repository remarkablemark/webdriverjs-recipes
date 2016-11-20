'use strict';

/**
 * Module dependencies.
 */
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

/**
 * Chrome options.
 */
var options = new chrome.Options();
var PROFILE_PATH = 'path_to_profile';
options.addArguments('user-data-dir=' + PROFILE_PATH);

/**
 * Build driver.
 */
var builder = new webdriver.Builder();
builder.forBrowser('chrome');
builder.setChromeOptions(options);

var driver = builder.build();
driver.get('chrome://version');

/**
 * Export driver.
 */
module.exports = driver;
