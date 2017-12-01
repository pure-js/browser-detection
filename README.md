# Detect browser

[![Build Status](https://travis-ci.org/pure-js/browser-detection.svg?branch=master)](https://travis-ci.org/pure-js/browser-detection)
[![Maintainability](https://api.codeclimate.com/v1/badges/594328cbb539ab26149e/maintainability)](https://codeclimate.com/github/pure-js/browser-detection/maintainability)
[![codecov](https://codecov.io/gh/pure-js/browser-detection/branch/master/graph/badge.svg)](https://codecov.io/gh/pure-js/browser-detection)
[![Test Coverage](https://api.codeclimate.com/v1/badges/594328cbb539ab26149e/test_coverage)](https://codeclimate.com/github/pure-js/browser-detection/test_coverage)
[![Greenkeeper badge](https://badges.greenkeeper.io/pure-js/browser-detection.svg)](https://greenkeeper.io/)

Tested on most popular browser in the World on October 2017, statistic gets from StatCounter.
> Use it if it's truly necessary, such as showing browser-specific instructions to install an extension. Use feature detection when possible.

## Usage
Installation
```
npm i browser-version-detection
```
Script returns object with browser name and version, for example:
```javascript
{
  name: 'Chrome',
  version: 62,
}
```
Call it where you want
```javascript
detectBrowser(window.navigator);
```
Note: also it's possible to use npm instead of yarn.
Minificated script located in ```dist/``` folder
## Contribution
    yarn install
    yarn run start

## Test
    npm i -g nyc
    yarn test
