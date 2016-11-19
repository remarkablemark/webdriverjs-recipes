'use strict';

/**
 * Module dependencies.
 */
var webdriver = require('selenium-webdriver');
// instead of using global mocha methods like `describe` and `it`,
// you must use the WebDriverJS testing module because of async
var test = require('selenium-webdriver/testing');
var assert = require('assert');

/**
 * Test suite.
 */
test.describe('Sample test', function() {
    // you may want to set a timeout for your mocha tests
    this.timeout(5000); // in milliseconds
    var driver;

    // setup
    test.before(function() {
        driver = require('./build-driver');
    });

    // teardown
    test.after(function() {
        driver.quit();
    });

    test.it('should open Google', function(done) {
        driver.get('https://www.google.com');
        driver.getTitle().then(function(title) {
            assert.equal(title, 'Google');
            done();
        });
    });

});
