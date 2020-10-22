/**
 * promise manager
 *
 * {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/promise.html}
 */
const { Builder, Key, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

driver.get('https://www.google.com/');
driver.getTitle().then(title => console.log('getTitle:', title));

const element = driver.findElement({ name: 'q' });
element.sendKeys('webdriver', Key.ENTER);

driver.wait(until.titleContains('webdriver'), 1000);
driver.getTitle().then(title => console.log('getTitle:', title));

driver.quit();