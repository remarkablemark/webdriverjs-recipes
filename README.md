# WebDriverJS Recipes

Recipes and examples of how to perform automation with [WebDriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs) ([Selenium](https://www.seleniumhq.org/) for [Node.js](https://nodejs.org/)).

See [API documentation](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html) for more information on [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver).

## Prerequisites

- [Node.js 8+](https://nodejs.org/en/download/) and [npm 6+](https://www.npmjs.com/get-npm)
- Browsers
  - [Chrome](https://www.google.com/chrome/) and [ChromeDriver](https://chromedriver.chromium.org/downloads)
  - [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [geckodriver](https://github.com/mozilla/geckodriver/releases)

## Install

```sh
$ git clone https://github.com/remarkablemark/webdriverjs-recipes.git
$ cd webdriverjs-recipes
$ npm install
```

## Scripts

Build driver:

```sh
$ npm run build-driver
```

Build driver with specified browser:

```sh
$ SELENIUM_BROWSER=chrome npm run build-driver
```

Check if element exists:

```sh
$ npm run check-element-exists
```

Launch Chrome profile:

```sh
$ npm run chrome-profile
```

Find element(s):

```sh
$ npm run find
```

Wait until a condition is true:

```sh
$ npm run wait-until
```

Take screenshot:

```sh
$ npm run take-screenshot
```

Run tests with [Mocha](https://mochajs.org/):

```sh
$ npm run testing-with-mocha
```

## License

[MIT](LICENSE)
