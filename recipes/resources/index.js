const driver = require('../build');

(async function () {
  try {
    const url =
      'https://developer.mozilla.org/docs/Web/API/Performance/getEntries';
    await driver.get(url);
    const stylesheets = await driver.executeScript(`
      return performance.getEntries()
        .map(entry => entry.name)
        .filter(url => url.includes('.css'));
    `);
    console.log('Stylesheets:', stylesheets);
  } catch (error) {
    console.error(error);
  } finally {
    await driver.quit();
  }
})();
