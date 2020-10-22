# WebDriverJS Recipes

Recipes and examples of how to perform automation with [WebDriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs) ([Selenium](https://www.seleniumhq.org/) for [Node.js](https://nodejs.org/)).

See [API documentation](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html) for more information on [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver).

## Prerequisites

[Node.js 8+](https://nodejs.org/en/download/):

```sh
brew install node
```

[Yarn 1+](https://classic.yarnpkg.com/en/docs/install/):

```sh
brew install yarn
```

[Chrome](https://www.google.com/chrome/):

```sh
brew cask install google-chrome
```

[ChromeDriver](https://chromedriver.chromium.org/downloads):

```sh
brew install chromedriver
```

[Firefox](https://www.mozilla.org/en-US/firefox/new/):

```sh
brew cask install firefox
```

[geckodriver](https://github.com/mozilla/geckodriver/releases):

```sh
brew cask install geckodriver
```

## Install

```sh
git clone https://github.com/remarkablemark/webdriverjs-recipes.git
cd webdriverjs-recipes
yarn
```

## Scripts

Using [async/await](https://javascript.info/async-await):

```js
yarn async-await
```

Build driver with Firefox browser:

```sh
yarn build
```

Build driver with Chrome browser:

```sh
SELENIUM_BROWSER=chrome yarn build
```

Check if element exists:

```sh
yarn check-element-exists
```

[Launch Chrome profile](https://remarkablemark.org/blog/2016/11/27/webdriverjs-chrome-profile/):

```sh
yarn chrome-profile
```

Find element(s):

```sh
yarn find
```

Using the [promise manager](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/promise.html):

```js
yarn promise-manager
```

Wait until condition is true:

```sh
yarn wait-until
```

Take a screenshot:

```sh
yarn screenshot
```

Run tests with [Mocha](https://mochajs.org/):

```sh
yarn mocha
```

## License

[MIT](LICENSE)
