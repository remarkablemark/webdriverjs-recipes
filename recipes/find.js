'use strict';

/**
 * Module dependencies.
 */
var webdriver = require('selenium-webdriver');
var driver = require('./build-driver');

driver.get('http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#findElement');

/**
 * Find (first) element.
 */
// method 1: using webdriver.By
driver.findElement(webdriver.By.tagName('h1'))
    .then(function(element) {
        element.getTagName().then(function(tagName) {
            console.log(tagName);
        });
    });

// method 2: using webdriver.By.Hash
driver.findElement({ tagName: 'h1' })
    .getAttribute('outerHTML')
    .then(function(html) {
        console.log(html);
    });

/**
 * Find elements.
 */
driver.findElements({ css: 'h2' })
    .then(function(elements) {
        // elements is an array of WebElements
        console.log(elements.map(function(element) {
            return element.constructor;
        }));
    });

/**
 * Wait then find (for elements that have not loaded yet).
 */
var element = driver.wait(
    webdriver.until.elementLocated({ xpath: '/html/body' }),
    300 // delay in milliseconds
);

/**
 * Find element within element.
 */
element.findElement({ css: '#findElement > .header > .name' })
    .getText()
    .then(function(text) {
        console.log(text);
    });

/**
 * Element not found.
 */
// method 1: catch error NoSuchElementError
driver.findElement({ className: 'no-such-element' })
    .then(null, function(error) {
        if (error.name === 'NoSuchElementError') {
            console.log('Unable to find element');
        }
    });

// method 2: length is zero
driver.findElements({ id: 'not-found' })
    .then(function(elements) {
        if (elements.length === 0) {
            console.log('No elements found');
        }
    });
