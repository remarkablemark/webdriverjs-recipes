const I = require('./I');

(async function () {
  try {
    await I.openBrowser();
    await I.waitUntilElementIsLocated();
    await I.waitUntilCustomConditionIsTrue();
  } catch (error) {
    console.error(error);
  } finally {
    await I.quitBrowser();
  }
})();
