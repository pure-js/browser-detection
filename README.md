# Check browser
[![Build Status](https://travis-ci.org/pure-js/check-browser.svg?branch=master)](https://travis-ci.org/pure-js/check-browser)
[![Code Climate](https://codeclimate.com/github/pure-js/check-browser/badges/gpa.svg)](https://codeclimate.com/github/pure-js/check-browser)
[![Test Coverage](https://codeclimate.com/github/pure-js/check-browser/badges/coverage.svg)](https://codeclimate.com/github/pure-js/check-browser/coverage)
[![Issue Count](https://codeclimate.com/github/pure-js/check-browser/badges/issue_count.svg)](https://codeclimate.com/github/pure-js/check-browser)
```
npm i browser-version-detection
```
Returns object with browser name and version, for example:
```javascript
{
  name: 'Chrome',
  version: 62,
}
```
Use it if it's truly necessary, such as showing browser-specific instructions to install an extension. Use feature detection when possible.

Note: also it's possible to use npm instead of yarn.
Minificated script located in ```dist/``` folder
## Contribution
    yarn install
    yarn run start

## Test
    yarn test
