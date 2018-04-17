# Detect browser

[![Build Status](https://travis-ci.org/pure-js/browser-detection.svg?branch=master)](https://travis-ci.org/pure-js/browser-detection)
[![codecov](https://codecov.io/gh/pure-js/browser-detection/branch/master/graph/badge.svg)](https://codecov.io/gh/pure-js/browser-detection)
[![Greenkeeper badge](https://badges.greenkeeper.io/pure-js/browser-detection.svg)](https://greenkeeper.io/)
[![Maintainability](https://api.codeclimate.com/v1/badges/594328cbb539ab26149e/maintainability)](https://codeclimate.com/github/pure-js/browser-detection/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/594328cbb539ab26149e/test_coverage)](https://codeclimate.com/github/pure-js/browser-detection/test_coverage)

Browser detection using the user agent.
Tested on most popular browser in the World on October 2017, statistic gets from StatCounter.

> It's worth re-iterating: it's very rarely a good idea to use user agent sniffing. You can almost always find a better, more broadly compatible way to solve your problem!
> > More details [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)

## Installation

```
npm i browser-version-detection --save
```
Script returns object with browser name and version, for example:
```javascript
const output = {
  name: 'Chrome',
  version: 62,
}
```

## API
### Get browser name and version 
```javascript
browserDetection.detectBrowser(window.navigator);
```
output
```javascript
const output = {
  name: 'Chrome',
  version: 64,
}
```
### Get browser name
```javascript
browserDetection.detectBrowserName(window.navigator.userAgent)
````
output
```javascript
const output = 'Chrome';
```
### Get browser version
```javascript
const name = browserDetection.detectBrowserName(window.navigator.userAgent);
browserDetection.detectBrowserVersion(window.navigator, name)
````
output
```javascript
const output = 64;
```
Minified script located in ```dist/``` folder

## Contribution
Note: also it's possible to use npm instead of yarn.

    yarn install
    yarn run start

## Test

    yarn test
