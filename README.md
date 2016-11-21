# WebDriverJS Recipes

A collection of useful recipes for using [WebDriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs), which is [Selenium](http://www.seleniumhq.org) for [Node.js](https://nodejs.org).

## Install

```sh
$ git clone https://github.com/remarkablemark/webdriverjs-recipes.git
$ cd webdriverjs-recipes
$ npm install
```

## Recipes

Build a driver:

```sh
$ node recipes/build-driver
```

Build a driver with a different browser (given driver is installed):

```sh
$ SELENIUM_BROWSER=chrome node recipes/build-driver
```

Launch a specified Chrome profile:

```sh
$ node recipes/chrome-profile
```

Take a screenshot:

```sh
$ node recipes/take-screenshot
```

Run tests with [Mocha](https://mochajs.org):

```sh
$ mocha recipes/testing-with-mocha
```

## License

[MIT](https://github.com/remarkablemark/webdriverjs-recipes/blob/master/LICENSE)
