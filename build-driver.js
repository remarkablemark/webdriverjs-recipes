'use strict';

/**
 * Module dependencies.
 */
var webdriver = require('selenium-webdriver');

/**
 * Build driver.
 */
var builder = new webdriver.Builder();
builder.forBrowser('firefox');
var driver = builder.build();

/**
 * Export driver.
 */
module.exports = driver;
