# Detect browser
[![Build Status](https://travis-ci.org/pure-js/browser-detection.svg?branch=master)](https://travis-ci.org/pure-js/browser-detection)
[![Code Climate](https://codeclimate.com/github/pure-js/browser-detection/badges/gpa.svg)](https://codeclimate.com/github/pure-js/browser-detection)
[![Test Coverage](https://codeclimate.com/github/pure-js/browser-detection/badges/coverage.svg)](https://codeclimate.com/github/pure-js/browser-detection/coverage)
[![Issue Count](https://codeclimate.com/github/pure-js/browser-detection/badges/issue_count.svg)](https://codeclimate.com/github/pure-js/browser-detection)
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
detectBrowser(navigator.userAgent);
```
Use it if it's truly necessary, such as showing browser-specific instructions to install an extension. Use feature detection when possible.

Note: also it's possible to use npm instead of yarn.
Minificated script located in ```dist/``` folder
## Contribution
    yarn install
    yarn run start

## Test
    yarn test
