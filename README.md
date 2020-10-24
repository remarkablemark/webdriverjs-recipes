# WebDriverJS Recipes

Recipes and examples of how to perform automation with [WebDriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs) ([Selenium](https://www.selenium.dev/) for [Node.js](https://nodejs.org/)).

See [API documentation](https://www.selenium.dev/selenium/docs/api/javascript/index.html) for more information on [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver).

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

## Available Scripts

In the project directory, you can run:

### `yarn async-await`

Automates a Firefox browser using [async/await](https://javascript.info/async-await).

### `yarn build`

Builds driver with Firefox browser.

To build driver with Chrome browser:

```sh
SELENIUM_BROWSER=chrome yarn build
```

### `yarn chrome-profile`

Launches Chrome profile page (see [article](https://remarkablemark.org/blog/2016/11/27/webdriverjs-chrome-profile/)).

The profile data is saved at `./my_profile_path/`.

### `yarn cucumber`

Runs browser automation test written in [Cucumber](https://github.com/cucumber/cucumber-js).

### `yarn find`

Finds elements.

### `yarn jest`

Runs browser automation test with [Jest](https://jestjs.io/).

### `yarn mocha`

Runs browser automation test with [Mocha](https://mochajs.org/).

### `yarn promise-manager`

Automates a Firefox browser using the deprecated [Promise Manager](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs).

This uses [selenium-webdriver@3.6.0](https://www.npmjs.com/package/selenium-webdriver/v/3.6.0).

### `yarn screenshot`

Takes and saves a screenshot to `./screenshot.png`.

### `yarn wait-until`

Waits until condition is true.

## License

[MIT](LICENSE)
